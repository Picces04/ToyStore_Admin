"use client";
import React from "react";
import { Select, Button } from "antd";
import Label from "../Label";
import { BaseSelectProps } from "@/types/props";

const { Option } = Select;

const BaseSelect: React.FC<BaseSelectProps> = ({
  id,
  name,
  label,
  options,
  value,
  mode,
  placeholder,
  disabled,
  className = "",
  error = false,
  message,
  onChange,
  onBlur,
  onSearch,
  searchValue = "",
}) => {
  // Filter Option theo label search
  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={`flex flex-col mt-4 mb-4 ${className}`}>
      {label && <Label htmlFor={id ?? name}>{label}</Label>}

      <Select
        allowClear
        mode={mode}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        showSearch
        placeholder={placeholder}
        disabled={disabled}
        onSearch={onSearch}
        filterOption={false} // tắt filter mặc định
        className={`rounded-md border px-4 py-10${
          error ? "border-red-500" : "border-gray-300"
        }`}
        size="large"
        popupRender={(menu) =>
          mode === "multiple" && options.length > 0 ? (
            <div className="rounded-md shadow-lg">
              <div className="px-2 py-1 border-b mb-1">
                <Button
                  type="link"
                  size="small"
                  onClick={() => onChange(options.map((o) => o.value))}
                >
                  Chọn tất cả
                </Button>
              </div>
              {menu}
            </div>
          ) : (
            menu
          )
        }
      >
        {filteredOptions.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>

      {message && (
        <p className={`mt-1 text-sm ${error ? "text-red-500" : "text-gray-500"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default BaseSelect;
