import { useEffect, useMemo, useState } from "react";

export default function useCountDown() {
  const [elapsedTime, setElapsedTime] = useState(
    Date.parse("2023-10-09") - Date.now()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((cuurent) => {
        if (cuurent > 0) return cuurent - 1000;
        else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedElapsedTime = useMemo(() => {
    if (elapsedTime > 0) {
      var seconds = Math.floor(elapsedTime / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      seconds %= 60;
      minutes %= 60;
      hours %= 24;

      var result = "";
      if (days > 0) {
        result += days + " day" + (days > 1 ? "s " : " ");
      }
      if (hours > 0) {
        result += hours + " hour" + (hours > 1 ? "s " : " ");
      }
      if (minutes > 0) {
        result += minutes + " minute" + (minutes > 1 ? "s " : " ");
      }
      if (seconds > 0) {
        result += seconds + " second" + (seconds > 1 ? "s " : " ");
      }

      return result.trim();
    }
  }, [elapsedTime]);

  return formattedElapsedTime;
}
