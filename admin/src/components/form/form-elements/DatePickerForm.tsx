"use client";
import { useState } from "react";
import { useFormContext } from "@/context/FormContext";
import Label from "../Label";
import BaseDatePicker from "../date-picker";
import { DateOption } from "flatpickr/dist/types/options";

type PropsType = {
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
  mode?: "single" | "multiple" | "range" | "time";
  required?: boolean;
  defaultDate?: DateOption;
};


export default function DatePickerForm({
  name,
  id,
  label,
  placeholder,
  mode = "single",
  required = false,
  defaultDate,
}: PropsType) {
  const { values, setValue, errors, setErrors, clearError, submitted } =
    useFormContext();
  const [touched, setTouched] = useState(false);

  const fieldErrors = errors.filter((err) => err.name === name);
  const latestError = fieldErrors[fieldErrors.length - 1];
  const showError = submitted || touched;
  const hasError = !!latestError && showError;

  const currentValue = values[name] ?? defaultDate ?? "";

  const handleChange = (val: string | string[]) => {
    setValue(name, val);

    if (touched) {
      if (
        (!val || (Array.isArray(val) && val.length === 0)) &&
        required
      ) {
        setErrors((prev) => [
          ...prev,
          { name, message: "Vui lòng chọn ngày" },
        ]);
      } else {
        clearError(name);
      }
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (
      (!currentValue || (Array.isArray(currentValue) && currentValue.length === 0)) &&
      required
    ) {
      setErrors((prev) => [
        ...prev,
        { name, message: "Vui lòng chọn ngày" },
      ]);
    } else {
      clearError(name);
    }
  };

  return (
    <div className="mb-4">
      {label && <Label htmlFor={id}>{label}</Label>}
      <BaseDatePicker
        id={id}
        mode={mode}
        placeholder={placeholder}
        defaultDate={defaultDate}
        value={currentValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {hasError && (
        <p className="mt-1 text-sm text-red-500">
          {latestError?.message}
        </p>
      )}
    </div>
  );
}
