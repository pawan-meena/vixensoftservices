// config.ts

export const NEXT_PUBLIC_BASE_URI =
  process.env.NEXT_PUBLIC_BASE_URI || "";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}api/v2/register`,
};
export default API_ENDPOINTS;
