import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useActivateAccountQuery } from "../../../../application/auth/authApi";

export default function useActivation() {
  const { tokenId } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, isSuccess } = useActivateAccountQuery(tokenId!);

  useEffect(() => {
    if (isSuccess) navigate("/login", { replace: true });
  }, [isSuccess]);

  return { isLoading, error };
}
