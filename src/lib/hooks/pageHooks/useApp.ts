import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import { changeAuthStatus } from "../../../application/auth/authSlice";

export default function useApp() {
  const dispatch = useAppDispatch();
  const { authStatus } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN_KEY);
    if (token) dispatch(changeAuthStatus(true));
  }, []);

  return { authStatus };
}
