"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";
import { SwitchFormProps } from "@/types/props";
import Switch from "../switch/Switch";

const SwitchForm: React.FC<SwitchFormProps> = ({
  name,
  onLabel = "开启",   // ✅ text khi bật
  offLabel = "关闭",   // ✅ text khi tắt
  defaultChecked = false,
  disabled,
  color = "blue",
}) => {
  const { values, setValue } = useFormContext();

  // nếu chưa có trong values → lấy defaultChecked
  const isChecked = values[name] ?? defaultChecked;

  const handleChange = (checked: boolean) => {
    setValue(name, checked);
  };

  return (
    <Switch
      id={name}
      name={name} // or provide a suitable label prop here
      checked={isChecked}
      disabled={disabled}
      onChange={handleChange}
      color={color}
      onLabel={onLabel}
      offLabel={offLabel}
    />
  );
};

export default SwitchForm;
