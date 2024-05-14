import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Input,
  Spacer,
} from "@nextui-org/react";
import EBlackImage from "../../assets/icons/E-black.png";

function indexLanding() {
  return (
    <>
      <div className="flex flex-col items-center max-w-sm w-full mx-auto">
        <Image
          isBlurred
          isZoomed
          width={200}
          src={EBlackImage}
          // fallbackSrc="https://via.placeholder.com/300x200"
          alt="Express Milac Logo"
        />
        <p className="text-4xl">Milac SMS Smart</p>
        <Spacer y={4} />
        <Card className="w-full">
          <CardBody>
            <Input
              required
              key="username"
              id="username"
              name="username"
              label="Usuario"
              labelPlacement="outside"
              type="text"
              // labelLeft={<User set="bold" />}
              // shadow={false}
              width="100%"
              // placeholder="username: Arbitrary name"
              // status={errors?.username ? "error" : undefined}
              // value={values?.username}
              // label={errors?.username || "UserName"}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
            <Spacer y={2} />
            <Input
              required
              key="password"
              id="password"
              name="password"
              label="Contraseña"
              labelPlacement="outside"
              type="password"
              // shadow={false}
              width="100%"
              // placeholder="password: nextui.org"
              // labelLeft={<Password set="bold" />}
              // value={values?.password}
              // status={errors?.password ? "error" : undefined}
              // label={errors?.password || "Password"}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
          </CardBody>
          <Spacer />
          <CardFooter>
            <Button className="w-full text-lg font-semibold" color="primary">
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default indexLanding;
