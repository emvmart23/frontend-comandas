"use client";

import { createColumnHelper } from "@tanstack/react-table";

// import { type DataTableFeatures } from "./DataTableFeatures";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { DataTableFeatures } from "@/components/DataTableFeatures";
import ProductDetails from "./ProductDetails";
// import ProductDetails from "./ProductDetails";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Products = {
  id: number;
  name: string;
  price: number;
  status: string;
  categoryId: number;
};

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Products>();

const ActionsCell = ({ row }: { row: any }) => {
  const [open, setIsOpen] = useState(false);
  const payment = row.original;

  return (
    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetTrigger render={<Button variant="outline">Ver</Button>} />
      <SheetContent>
        <div>ProductDetail</div>``
        <ProductDetails open={open} setIsOpen={setIsOpen} />
      </SheetContent>
    </Sheet>
  );
};

export const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Nombre",
  }),
  columnHelper.accessor("price", {
    header: "Precio",
  }),
  columnHelper.accessor("status", {
    header: "Estado",
  }),
  columnHelper.accessor("categoryId", {
    header: "Categoria",
  }),
  columnHelper.display({
    id: "actions",
    header: "Acciones",
    enableHiding: false,
    cell: ({ row }) => <ActionsCell row={row} />,
  }),
]);