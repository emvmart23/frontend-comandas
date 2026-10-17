import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/Field'
import { Input } from '@/components/ui/Input'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod';

const productSchema = z.object({
    name: z.string().min(3, "El nombre del producto debe tener al menos 3 caracteres"),
    price: z.number().min(0, "El precio del producto debe ser mayor o igual a 0"),
    status: z.enum(["active", "inactive"], "El estado del producto debe ser 'active' o 'inactive'"),
    categoryId: z.number().min(1, "Debe seleccionar una categoría"),
  });

export default function ProductForm() {

    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {
          name: "",
          price: 0,
          categoryId: 1,
        },
      });

  return (
    <form id="form-auth" className="gap-4">
      <FieldGroup className='grid grid-cols-2'>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-name">Nombre</FieldLabel>
              <Input
                {...field}
                id="form-auth-name"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa el nombre del producto"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-name">Precio</FieldLabel>
              <Input
                {...field}
                id="form-auth-name"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa el precio del producto"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <FieldGroup>
        <Controller
          name="status"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-name">Estado</FieldLabel>
              <Input
                {...field}
                id="form-auth-name"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa el nombre del producto"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <FieldGroup>
        <Controller
          name="categoryId"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-name">Categoría</FieldLabel>
              <Input
                {...field}
                id="form-auth-name"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa el nombre del producto"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  )
}
