import { Link } from "@nextui-org/react";

function Footer() {
  return (
    <>
      <div className="w-full flex items-center justify-center py-3 text-lg">
        <span className="text-default-600">Corporativo </span>
        <Link
          isExternal
          className="flex items-center gap-1"
          href="http://www.milac.com.mx/"
          title="Milac.com.mx Home"
        >
          <p className="text-primary">Milac S.A. de C.V. ©</p>
        </Link>
      </div>
    </>
  );
}

export default Footer;
