import { Container } from "../container/container.component";
import { Logo } from "../logo/logo.components";
import { Navlinks } from "../navlinks/navlinks";

export const Navbar = () => {
  return (
    <nav className="p-2 z-10 sticky top-0  bg-[var(--primary-bg-color)] text-[var(--white)] shadow-md">
      <Container>
        <div className="flex items-center justify-between" >
          <Logo />
          <Navlinks />
        </div>
      </Container>
    </nav>
  );
};
