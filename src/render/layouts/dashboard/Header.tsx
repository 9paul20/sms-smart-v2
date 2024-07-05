import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Link as LinkRouter } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <Navbar maxWidth="xl" position="sticky">
          <NavbarContent className="hidden sm:flex gap-4" justify="start">
            <NavbarBrand className="flex justify-start items-center gap-1 max-w-fit">
              {/* <AcmeLogo /> */}
              <p className="font-bold text-inherit">SMS Smart V2</p>
            </NavbarBrand>
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
      </header>
    </>
  );
}

export default Header;
