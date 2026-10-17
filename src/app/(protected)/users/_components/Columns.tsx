"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
// import ProductDetails from "./ProductDetails";
import { DataTableFeatures } from "@/components/DataTableFeatures";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: number;
  username: string;
  name: string;
  lastName: string;
  email: string;
  dni: number;
  status: string;
  roles: string;
};

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, User>();

const ActionsCell = ({ row }: { row: any }) => {
  const [open, setIsOpen] = useState(false);
  const payment = row.original;

  return (
    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetTrigger render={<Button variant="outline">Ver</Button>} />
      <SheetContent>
        <div>ProductDetail</div>``
        {/* <ProductDetails open={open} setIsOpen={setIsOpen} /> */}
      </SheetContent>
    </Sheet>
  );
};

export const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Nombre de usuario",
  }),
  columnHelper.accessor("email", {
    header: "Correo electrónico",
  }),
  columnHelper.accessor("status", {
    header: "Nombre",
  }),
  columnHelper.accessor("lastName", {
    header: "Apellido",
  }),
  columnHelper.accessor("dni", {
    header: "Dni",
  }),
  columnHelper.accessor("roles", {
    header: "Roles",
  }),
  columnHelper.display({
    id: "actions",
    header: "Acciones",
    enableHiding: false,
    cell: ({ row }) => <ActionsCell row={row} />,
  }),
]);

