import { useState, FormEventHandler, ChangeEventHandler } from "react";
import { showErrorToast, showSuccessToast } from "../../../utils/toastConfig";
import { useRegisterMutation } from "../../../../application/auth/authApi";

interface SignupForm {
  name?: string;
  email?: string;
  password?: string;
  invisible: boolean;
  avatar?: File | null;
}

const initialState: SignupForm = { invisible: true };

export default function useSignup() {
  const [state, setState] = useState(initialState);

  const [register] = useRegisterMutation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(state)) {
      if (key === "avatar") {
        if (state.avatar) formData.append("profileImage", value);
      } else formData.append(key, value ?? "");
    }

    try {
      await register(formData).unwrap();
      showSuccessToast(
        "Your account has created Successfully. check your email to activate your account"
      );
      resetForm();
    } catch (error: any) {
      showErrorToast(error.message);
      console.error(error.message);
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value, files } = event.target;
    if (name === "avatar") {
      state[name] = files?.item(0);
    } else {
      (state as any)[name] = value;
    }
    setState({ ...state });
  };

  const resetForm = () => {
    setState(initialState);
  };

  return {
    state,
    handleSubmit,
    handleInputChange,
    setState,
  };
}
