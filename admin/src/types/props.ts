import { ReactNode } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

export interface FileInputProps {
  id?: string;
  name: string;
  multiple?: boolean;
  label?: string;
  className?: string;
  error?: boolean;
  hint?: string;
}
export interface DropzoneImageInputProps {
  name: string;
  multiple?: boolean;
  className?: string;
  error?: boolean;
  hint?: string;
}

export interface BaseProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
}

export interface InputProps {
  id: string; // Unique ID cho input
  name: string; // Tên field
  type?: string; // text, email, number, password...
  value: string; // Giá trị của input
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  message?: string;
  className?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export interface TextareaProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
}

export interface BaseTextAreaProps {
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  message?: string;
  onChange: (value: string) => void;
}

export interface FormProps {
  onSubmit: (data: Record<string, any> | FormData) => void;
  children: ReactNode;
  className?: string;
  mode?: "json" | "multipart";
}

export interface SelectFieldProps {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  mode?: "multiple" | "tags" | undefined;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  hint?: string;
}

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string; // tên field trong form
  title?: string; // tiêu đề (optional)
  options: RadioOption[]; // danh sách các option
}

export interface CheckboxProps {
  id?: string;
  name?: string;
  value?: any;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (checked: boolean) => void;
}

export interface BaseSelectProps {
  id?: string;
  name: string;
  label?: string;
  options: { label: string; value: string }[];
  value: string | string[] | undefined;
  mode?: "multiple" | "tags";
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: boolean;
  message?: string;
  onChange: (val: string | string[]) => void;
  onBlur?: () => void;
  onSearch?: (val: string) => void;
  searchValue?: string;
}

// Cho từng option trong CheckboxGroup
export interface CheckboxOption {
  label: string;               // nhãn hiển thị
  value: string | number;      // giá trị của option
  disabled?: boolean;          // có disable hay không
}

// Cho toàn bộ group
export interface CheckboxGroupProps {
  name: string;                // tên field (key trong FormContext)
  title?: string;              // tiêu đề group
  options: CheckboxOption[];   // danh sách các option
}

export interface BaseSwitchProps {
  id?: string;
  name: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  color?: "blue" | "gray";
}

export interface SwitchFormProps {
  name: string;
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  color?: "blue" | "gray";
}

export type DatePickerFormProps = {
  id: string;
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  mode?: "single" | "multiple" | "range" | "time";
  required?: boolean;
};

export type BaseDatePickerProps = {
  id: string;
  name: string;
  className?: string;
  mode?: "single" | "multiple" | "range" | "time";
  defaultDate?: flatpickr.Options.DateOption;
  placeholder?: string;
  onChange?: (val: string | string[]) => void;
  value?: string | string[];
  onBlur?: () => void;
};

export interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
  linkBtn?: string; // Link for the button
  titleBtn?: string; // Title for the button
  isAdd?: boolean; // Title for the button
  isDelete?: boolean; // Title for the button
}