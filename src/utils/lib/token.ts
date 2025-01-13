export const isTokenPresent = (): boolean => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const token = localStorage.getItem("token");
    return token !== null;
  }
  return false;
};
