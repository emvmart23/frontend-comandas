import { Button } from "@/components/ui/Button";
import { SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/Sheet";
import { Pencil, X } from "lucide-react";

interface Props {
//   product: Product;
  open: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function ProductDetails({ open, setIsOpen }: Props) {
  return (
    <SheetContent>
      <SheetHeader>
      <SheetTitle>Informacion del producto</SheetTitle>
      <SheetDescription/>
      </SheetHeader>
      {/* <ProductEditForm
        product={product}
        setIsPending={setIsPending}
        setIsOpen={setIsOpen}
      /> */}
      <SheetFooter className="mt-2 p-2">
        <Button type="submit" form="update-product-form">
          <Pencil className="mr-2 h-4 w-4" />
          Aplicar
        </Button>
        <Button variant="destructive">
          <X className="mr-2 h-4 w-4" />
          Eliminar
        </Button>
      </SheetFooter>
    </SheetContent>
  )
}
