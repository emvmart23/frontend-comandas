"use client";

import { Input } from "@/components/ui/Input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { MouseEvent, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "./Field";

interface InputPasswordProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  className?: string;
  placeholder?: string;
  id: string;
  label: string;
}

export function InputPassword<T extends FieldValues>({
  control,
  className,
  name,
  placeholder = "Contraseña",
  id,
  label
}: InputPasswordProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={id}>{label}</FieldLabel>

          <div className="relative">
            <Input
              className={className}
              id={id}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
              {...field}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={toggleShowPassword}
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
              ) : (
                <EyeIcon className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
