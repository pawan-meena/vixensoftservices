"use client";

export function ClientProviders({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: any;
}) {
  return { children };
}
