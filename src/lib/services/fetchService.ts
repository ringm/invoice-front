import { cookies } from "next/headers";
import { ApiResponse } from "../types/Api";

export const fetchService = async <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> => {
  const token = await getAuthToken();
  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  const response = await fetch(`${process.env.API_DEV}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "An error occurred");
  }

  return await response.json();
};

const getAuthToken = async () => {
  const c = await cookies();
  return c.get("invoice-session")?.value || null;
};
