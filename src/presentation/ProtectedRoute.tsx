import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedProps extends PropsWithChildren {
  hasUserAuthenticated?: boolean;
  type: "auth-sensitive" | "no-auth-sensitive";
}

const ProtectedElement: FC<ProtectedProps> = ({
  type,
  hasUserAuthenticated,
  children,
}) => {
  if (type === "auth-sensitive")
    return hasUserAuthenticated ? (
      <>{children}</>
    ) : (
      <Navigate to="/login" replace />
    );
  else
    return !hasUserAuthenticated ? (
      <>{children}</>
    ) : (
      <Navigate to="/" replace />
    );
};

export default ProtectedElement;
