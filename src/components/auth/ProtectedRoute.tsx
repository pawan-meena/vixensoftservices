import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";

interface ProtectedRouteProps {
  children: React.ReactNode;
  publicRoutes: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  publicRoutes,
}) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const token = localStorage.getItem("token");
      const currentRoute = router.pathname;

      if (!token && !publicRoutes.includes(currentRoute)) {
        dispatch(closeModal());
        router.push("/email-login");
      }
    }
  }, [mounted, router, publicRoutes]);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
