import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const UserSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: requiredErrorMsg,
    })
    .trim(),
  lastName: z
    .string()
    .min(1, { message: requiredErrorMsg })
    .trim(),
  username: z.string().min(1, { message: requiredErrorMsg }).trim(),
  email: z.email({ message: "Por favor, ingresa un correo electrónico válido" }).trim(),
  dni: z
    .string()
    .min(1, { message: requiredErrorMsg })
    .max(8, { message: "El DNI no puede tener más de 8 caracteres" })
    .trim(),
  salary: z.string().min(1, { message: requiredErrorMsg }).trim(),
  //   profit_margin: z.coerce.number().min(1, { message: requiredErrorMsg }),
  roleIds: z.array(z.number()).min(1, { message: requiredErrorMsg }),
});

export const PasswordSchema = z.object({
  password: z.string().min(1, { message: requiredErrorMsg }),
  passwordConfirmation: z.string().min(1, { message: requiredErrorMsg }),
});

export const isActive = z.object({
  isActive: z.boolean(),
});

export const EditScheme = z.intersection(UserSchema, isActive);
