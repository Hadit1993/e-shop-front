import useActivation from "../../../lib/hooks/pageHooks/auth/useActivation";

const ActivationPage = () => {
  const { error, isLoading } = useActivation();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {!isLoading && (
        <span>
          {error?.message ?? "Your account has been activated successfully"}
        </span>
      )}
    </div>
  );
};

export default ActivationPage;
