import { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/router";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
      null
    );
    const router = useRouter();
    const subComponent = router.pathname;

    const isActive = (paths: string[]): boolean =>
      paths.some((path) => subComponent.startsWith(path));

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        if (isActive(["/"])) {
        } else {
          router.push("/email-login");
        }
      } else {
        setIsAuthenticated(true);
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
