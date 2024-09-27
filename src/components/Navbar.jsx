import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Circle from "@/assets/Circle";
import Rectangle from "@/assets/Rectangle";
import Triangle from "@/assets/Triangle";

export default function App({ setShape }) {
  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button onClick={() => setShape("circle")}>
            <Circle />
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button onClick={() => setShape("rectangle")}>
            <Rectangle />
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button onClick={() => setShape("circle")}>
            <Triangle />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
