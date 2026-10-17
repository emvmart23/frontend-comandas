"use client"
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import ProductForm from "./ProductForm";
// import ProductForm from "../ProductForm";

export default function ProductActions() {
  const [isPending, setIsPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger render={<Button className="w-32 rounded-md">Crear Producto</Button>}/>
      <DialogContent className="sm:max-w-md p-6" >
        <DialogHeader>
          <DialogTitle>Nuevo Producto</DialogTitle>
          <DialogDescription>
            En este formulario puedes crear un nuevo Producto
          </DialogDescription>
        </DialogHeader>
        <ProductForm />
        <DialogFooter className="sm:justify-center gap-4">
          <Button
            disabled={isPending}
            type="submit"
            form="add-product-form"
            className="w-[50%]"
          >
            {isPending && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Agregar
            <span className="sr-only">Agregar nuevo producto</span>
          </Button>
          <DialogClose  className="w-[50%]">
            <Button variant="outline">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
