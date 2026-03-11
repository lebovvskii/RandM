import { type RefObject, useEffect } from "react";

export const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onOutsideClick: () => void,
  isEnabled: boolean = true
) => {
  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEnabled, onOutsideClick, ref]);
};
