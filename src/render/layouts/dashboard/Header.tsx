import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Link as LinkRouter } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">SMS Smart V2</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground">
              <LinkRouter to="/" unstable_viewTransition>
                Login
              </LinkRouter>
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              <LinkRouter to="/dashboard" unstable_viewTransition>
                Dashboard
              </LinkRouter>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              <LinkRouter to="#" unstable_viewTransition>
                Integrations
              </LinkRouter>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" />
      </Navbar>
    </>
  );
}

export default Header;
