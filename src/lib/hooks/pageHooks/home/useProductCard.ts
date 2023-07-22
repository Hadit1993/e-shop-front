import { useState } from "react";

export default function useProductCard(prodName: string) {
  const [isLiked, setLiked] = useState(false);
  const [isOpen, makeOpen] = useState(false);
  const productName = prodName.replace(/\s+/g, "-");

  const toggleLike = () => setLiked(!isLiked);

  return {
    productName,
    isLiked,
    toggleLike,
    isOpen,
    makeOpen,
  };
}
