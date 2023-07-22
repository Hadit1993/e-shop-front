import { useState } from "react";

export default function useProductDetailsCard() {
  const [count, setCount] = useState(1);
  const [isClicked, setClicked] = useState(false);
  const [isSelected, makeSelected] = useState(false);

  const toggleClick = () => setClicked(!isClicked);

  const toggleSelect = () => makeSelected(!isClicked);

  const handleMessageSubmit = () => {};

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return {
    count,

    isClicked,
    toggleClick,
    isSelected,
    toggleSelect,
    handleMessageSubmit,
    incrementCount,
    decrementCount,
  };
}
