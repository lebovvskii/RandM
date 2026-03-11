import { type FocusEvent, type ReactNode, useMemo, useRef, useState } from "react";

import classNames from "classnames";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import { SelectArrow } from "./SelectArrow";

import "./Selector.css";

export type SelectorSize = "large" | "small";

export interface ISelectorOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface ISelectorProps {
  options: ISelectorOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  size?: SelectorSize;
  name?: string;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  onChange?: (value: string, option: ISelectorOption) => void;
  renderOptionAddon?: (option: ISelectorOption) => ReactNode;
}

export const Selector = ({
  options,
  value,
  defaultValue,
  placeholder = "Select...",
  size = "large",
  name,
  disabled = false,
  className,
  ariaLabel,
  onChange,
  renderOptionAddon,
}: ISelectorProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const selectedValue = isControlled ? value : internalValue;
  const selectedIndex = useMemo(
    () => options.findIndex((option) => option.value === selectedValue),
    [options, selectedValue]
  );
  const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : undefined;
  const formValue = selectedOption?.value ?? "";

  const openMenu = () => {
    if (disabled || options.length === 0) {
      return;
    }
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const selectOption = (option: ISelectorOption) => {
    if (option.disabled) {
      return;
    }

    if (!isControlled) {
      setInternalValue(option.value);
    }
    onChange?.(option.value, option);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleTriggerClick = () => {
    if (isOpen) {
      closeMenu();
      return;
    }
    openMenu();
  };

  const handleRootBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextFocused = event.relatedTarget as Node | null;
    if (!nextFocused || !rootRef.current?.contains(nextFocused)) {
      closeMenu();
    }
  };

  useOutsideClick(rootRef, closeMenu, isOpen);

  return (
    <div
      className={classNames("selector", `selector--${size}`, className)}
      onBlurCapture={handleRootBlur}
      ref={rootRef}
    >
      <button
        aria-label={ariaLabel}
        className="selector__trigger"
        disabled={disabled}
        onClick={handleTriggerClick}
        ref={triggerRef}
        type="button"
      >
        <span className="selector__trigger-content">
          <span
            className={classNames("selector__value", {
              "selector__value--placeholder": !selectedOption,
            })}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>

          {selectedOption && renderOptionAddon ? (
            <span className="selector__addon">{renderOptionAddon(selectedOption)}</span>
          ) : null}
        </span>

        <span
          className={classNames("selector__arrow-wrap", { "selector__arrow-wrap--open": isOpen })}
        >
          <SelectArrow />
        </span>
      </button>

      {isOpen ? (
        <div className="selector__menu">
          {options.map((option) => {
            return (
              <button
                className="selector__option"
                disabled={option.disabled}
                key={option.value}
                onClick={() => selectOption(option)}
                type="button"
              >
                <span className="selector__option-text">{option.label}</span>
                {renderOptionAddon ? (
                  <span className="selector__addon">{renderOptionAddon(option)}</span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {name ? (
        <input
          aria-hidden="true"
          className="selector__form-proxy"
          disabled={disabled}
          name={name}
          onChange={() => {}}
          tabIndex={-1}
          value={formValue}
        />
      ) : null}
    </div>
  );
};
