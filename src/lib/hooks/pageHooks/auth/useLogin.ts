import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useLoginMutation } from "../../../../application/auth/authApi";
import { showErrorToast } from "../../../utils/toastConfig";
import { useAppDispatch } from "../../reduxHooks";
import { changeAuthStatus } from "../../../../application/auth/authSlice";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email?: string;
  password?: string;
  invisible: boolean;
}

const initialState: LoginForm = { invisible: true };

export default function useLogin() {
  const [state, setState] = useState<LoginForm>(initialState);

  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    (state as any)[name] = value;
    setState({ ...state });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      const result = await login({
        email: state.email!,
        password: state.password!,
      }).unwrap();
      localStorage.setItem(
        import.meta.env.VITE_ACCESS_TOKEN_KEY,
        result.accessToken
      );
      dispatch(changeAuthStatus(true));
      //   navigate("/", { replace: true });
    } catch (error: any) {
      showErrorToast(error.message);
    }
  };

  return { state, setState, handleInputChange, handleSubmit };
}
