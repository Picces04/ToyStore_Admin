"use client";
import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import { CalenderIcon } from "../../icons";

type PropsType = {
  id: string;
  mode?: "single" | "multiple" | "range" | "time";
  defaultDate?: flatpickr.Options.DateOption;
  placeholder?: string;
  onChange?: (val: string | string[]) => void;
  value?: string | string[];
  onBlur?: () => void;
};

export default function BaseDatePicker({
  id,
  mode = "single",
  defaultDate,
  placeholder,
  onChange,
  value,
  onBlur,
}: PropsType) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const fp = flatpickr(inputRef.current, {
      mode,
      static: true,
      monthSelectorType: "static",
      dateFormat: "Y-m-d",
      defaultDate,
      onChange: (selectedDates) => {
        const val =
          mode === "single"
            ? selectedDates[0]?.toISOString().split("T")[0] ?? ""
            : selectedDates.map((d) => d.toISOString().split("T")[0]);
        onChange?.(val);
      },
    });

    return () => {
      if (!Array.isArray(fp)) fp.destroy();
    };
  }, [mode, defaultDate, onChange]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={id}
        placeholder={placeholder}
        defaultValue={
          Array.isArray(value) ? value.join(", ") : value ?? ""
        }
        onBlur={onBlur}
        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 
          focus:outline-hidden focus:ring-3
          dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30
          bg-transparent text-gray-800 border-gray-300
          focus:border-brand-300 focus:ring-brand-500/20
          dark:border-gray-700 dark:focus:border-brand-800"
      />
      <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
        <CalenderIcon className="size-6" />
      </span>
    </div>
  );
}
