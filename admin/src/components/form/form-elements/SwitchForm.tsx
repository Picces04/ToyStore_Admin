"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";
import Switch from "../switch/Switch";
import { SwitchFormProps } from "@/types/props";

const SwitchForm: React.FC<SwitchFormProps> = ({
  name,
  label,
  defaultChecked = false,
  disabled,
  color = "blue",
}) => {
  const { values, setValue } = useFormContext();

  const isChecked = values[name] ?? defaultChecked;

  const handleChange = (checked: boolean) => {
    setValue(name, checked);
  };

  return (
    <Switch
      name={name}
      label={label}
      checked={isChecked}
      disabled={disabled}
      onChange={handleChange}
      color={color}
    />
  );
};

export default SwitchForm;
