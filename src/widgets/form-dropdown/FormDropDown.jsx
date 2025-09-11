import React, { useEffect, useMemo, useRef, useState } from "react";
import downArrow from "../../assets/transport-overview-icons/downArrow.svg";
import styles from "./FormDropDown.module.css";

const FormDropDown = ({
  options = [],
  placeholder = "",
  value, 
  onChange, 
  disabled = false,
  className = "",
  fieldName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const wrapperRef = useRef(null);

  // Handle controlled or uncontrolled usage
  const selectedValue = value !== undefined ? value : internalValue;
  const selectedOption = useMemo(
    () => options.find((o) => o.value === selectedValue) || null,
    [options, selectedValue]
  );
  const selectedLabel = selectedOption?.label ?? "";

  const open = () => !disabled && setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setHighlightIndex(-1);
  };
  const toggle = () => (isOpen ? close() : open());

  // Handle selecting an option
  const handleSelect = (option) => {
    console.log("Selected Option:", option); 
    if (!option) return;

    // If the value is uncontrolled, set the internal value
    if (value === undefined) setInternalValue(option.value);

    // Call Formik's onChange handler with the correct structure
    onChange?.({
      target: {
        name: fieldName, 
        value: option.value, 
      },
    });

    close();
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Keyboard navigation for accessibility
  const onKeyDown = (e) => {
    if (disabled) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (!isOpen) {
        open();
        setHighlightIndex((idx) =>
          idx >= 0
            ? idx
            : Math.max(
                0,
                options.findIndex((o) => o.value === selectedValue)
              )
        );
      } else if (isOpen) {
        if (highlightIndex >= 0 && highlightIndex < options.length) {
          handleSelect(options[highlightIndex]);
        } else {
          close();
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        open();
        setHighlightIndex(0);
      } else {
        setHighlightIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : options.length - 1
        );
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        open();
        setHighlightIndex(options.length - 1);
      } else {
        setHighlightIndex((prev) => (prev > 0 ? prev - 1 : 0));
      }
    } else if (e.key === "Escape" || e.key === "Tab") {
      close();
    }
  };

  const onOptionMouseEnter = (idx) => setHighlightIndex(idx);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.selectWrapper} ${className}`}
      aria-disabled={disabled}
    >
      <div
        className={`${styles.dropdown} ${isOpen ? styles.open : ""} ${
          disabled ? styles.disabled : ""
        }`}
        onClick={toggle}
        onKeyDown={onKeyDown}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="dropdown-listbox"
        tabIndex={disabled ? -1 : 0}
      >
        <input
          placeholder={placeholder}
          value={selectedLabel}
          className={styles.input_box}
          readOnly
          aria-readonly="true"
          name={fieldName} // Add the name here
        />
        <figure className={styles.arrowWrap} aria-hidden="true">
          <img src={downArrow} alt="" className={styles.arrowIcon} />
        </figure>
      </div>
      {isOpen && (
        <ul
          id="dropdown-listbox"
          className={styles.list}
          role="listbox"
          tabIndex={-1}
        >
          {options.map((option, idx) => {
            const isSelected = option.value === selectedValue;
            const isActive = idx === highlightIndex;
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                className={`${styles.each_option} ${
                  isSelected ? styles.selected : ""
                } ${isActive ? styles.active : ""}`}
                onMouseEnter={() => onOptionMouseEnter(idx)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(option); // Call handleSelect when an option is clicked
                }}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FormDropDown;
