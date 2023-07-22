import useCountDown from "../../../lib/hooks/componentHooks/home/events/useCountDown";

const CountDown = () => {
  const formattedElapsedTime = useCountDown();

  return (
    <div>
      {formattedElapsedTime ? (
        <span className="text-[25px] text-blue-400">
          {formattedElapsedTime}
        </span>
      ) : (
        <span className="text-[25px] text-red-500">Time's Up</span>
      )}
    </div>
  );
};

export default CountDown;
