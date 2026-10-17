import { Input } from "@/components/ui/Input";
import { UserSchema } from "@/lib/validators/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// import { toast } from "@/hooks/useToast";
import InputPassword from "@/components/InputPassword";
// import api from "@/service";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
// import { useQueryClient } from "react-query";
import React, { useEffect, useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/Field";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/Combobox";
import api from "@/lib/api";
import { toast } from "@/components/ui/Toast";
// import { getRoles } from "@/helpers/getRoles";

interface Props {
  setIsPending: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
}

export default function UserForm({ setIsPending, setIsOpen }: Props) {
  const anchor = useComboboxAnchor();
  //   const [roles, setRoles] = useState<Role[]>([])
  //   const queryClient = useQueryClient();

  const roles = [
    "admin",
    "mozo",
    "anfitriona",
    "asdas",
    "Astro",
    "Angular",
    "React",
    "Javascript",
  ];

  const rolesConId = roles.map((rol, index) => ({
    id: index + 1,
    nombre: rol,
  }));

  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "",
      name: "",
      lastName: "",
      email: "",
      dni: "",
      salary: "",
      roleIds: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof UserSchema>) => {
    console.log("values",values)
    setIsPending(true);
    try {
      const response = await api.post("/api/users", values);
      console.log(response)
      if (response.status == 201) {
        toast.add({
          type: "success",
          description: "Cuenta creada correctamente",
        });
      }
      // queryClient.invalidateQueries("users");
      setIsOpen(false);
    } catch (error:any) {
      const errorMessage = error.response?.data?.message 
      || error.message 
      || 'Error inesperado del servidor';

    toast.add({
      type: 'error',
      description: `Error al crear cuenta: ${errorMessage}`,
      priority: 'high'
    });
    } finally {
      setIsPending(false);
    }
  };

  //   const fetchRoles = async () => {
  //     try {
  //       const response = await getRoles();
  //       setRoles(response.role);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   useEffect(()=>{
  //     fetchRoles();
  //   },[])

  return (
    <form id="add-user-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="grid grid-cols-2 gap-y-8">
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-user">Usuario</FieldLabel>
              <Input
                {...field}
                id="form-auth-user"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa tu usuario"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-user">Nombre</FieldLabel>
              <Input
                {...field}
                id="form-auth-user"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa tu nombre"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="lastName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-user">Apellido</FieldLabel>
              <Input
                {...field}
                id="form-auth-user"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa tu apellido"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-user">
                Correo electrónico
              </FieldLabel>
              <Input
                {...field}
                id="form-auth-user"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa tu correo electrónico"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="dni"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-user">
                Documento de identidad
              </FieldLabel>
              <Input
                {...field}
                id="form-auth-user"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa el dni"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="salary"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-user">Salario</FieldLabel>
              <Input
                {...field}
                id="form-auth-user"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa el salario"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="roleIds"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              orientation="responsive"
              className="col-span-2"
              data-invalid={fieldState.invalid}
            >
              <FieldContent>
                <FieldLabel htmlFor="form-rhf-select-language">
                  Roles
                </FieldLabel>
                <FieldDescription>Asigna roles al usuario</FieldDescription>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldContent>
              <Combobox
                multiple
                autoHighlight
                items={roles}
                value={field.value}
                onValueChange={field.onChange}
              >
                <ComboboxChips ref={anchor} className="sm:max-w-3xs">
                  <ComboboxValue>
                    {(value) => (
                      <React.Fragment>
                        {value.map((val: number) => {
                          const d = rolesConId.find((a) => a.id === val)?.nombre;
                          return <ComboboxChip key={val}>{d}</ComboboxChip>;
                        })}
                        <ComboboxChipsInput />
                      </React.Fragment>
                    )}
                  </ComboboxValue>
                </ComboboxChips>
                <ComboboxContent anchor={anchor}>
                  <ComboboxEmpty>No se encontraron roles.</ComboboxEmpty>
                  <ComboboxList>
                    {rolesConId.map((item) => (
                      <ComboboxItem key={item.id} value={item.id}>
                        {item.nombre}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
}
