"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";
import Radio from "../input/Radio";
import { RadioGroupProps } from "@/types/props";
import Label from "../Label";

export default function RadioGroup({ name, title, options }: RadioGroupProps) {
  const { values, setValue } = useFormContext();

  const handleRadioChange = (value: string) => {
    setValue(name, value);
  };

  return (
    <>
      {title && <Label htmlFor={name}>{title}</Label>}
      <div className="flex flex-wrap items-center gap-8">
        {options.map((opt, idx) => (
          <Radio
            key={opt.value}
            id={`${name}-${idx}`}
            name={name}
            value={opt.value}
            checked={values[name] === opt.value}
            onChange={handleRadioChange}
            label={opt.label}
            disabled={opt.disabled}
          />
        ))}
      </div>
    </>
  );
}
