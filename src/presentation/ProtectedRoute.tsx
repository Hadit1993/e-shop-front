import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

type AuthSentivity = "auth-sensitive" | "no-auth-sensitive";

interface ProtectedProps extends PropsWithChildren {
  hasUserAuthenticated?: boolean;
  type: AuthSentivity;
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
