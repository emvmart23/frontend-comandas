import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/DropdownMenu";
import { Button } from "@/components/ui/Button";
import { User } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { logout } from "@/store/slices/auth";
// import { useTheme } from "@/context/theme";

export default function UserDropDown() {
  //   const dispatch = useDispatch();
  //   const { setTheme } = useTheme();

  //   const handleLogout = () => {
  //     dispatch(logout());
  //   };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-10 h-10 rounded-full p-2">
          <User className="w-full h-full" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Tema</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="right-2 top-10">
                <DropdownMenuItem>Claro</DropdownMenuItem>
                <DropdownMenuItem>Oscuro</DropdownMenuItem>
                <DropdownMenuItem>Default</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <span>Salir</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
