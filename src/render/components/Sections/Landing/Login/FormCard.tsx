import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Spacer,
} from '@nextui-org/react';
import VisibilityPasswordStore from '../../../../../js/stores/landing/VisibilityPasswordStore';
import { EyeFilledIcon } from '../../../UI/EyeFilledIcon ';
import { EyeSlashFilledIcon } from '../../../UI/EyeSlashFileIcon';
import { PasswordIcon } from '../../../UI/PasswordIcon';
import { UserIcon } from '../../../UI/UserIcon';

function FormCard() {
  const { isVisible, toggleVisibility } = VisibilityPasswordStore();

  return (
    <>
      <Card className="w-full">
        <CardBody>
          <Input
            required
            isClearable
            key="username"
            id="username"
            name="username"
            label="Usuario"
            labelPlacement="outside"
            type="text"
            // labelLeft={<User set="bold" />}
            // shadow={false}
            width="100%"
            startContent={
              <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
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
            type={isVisible ? 'text' : 'password'}
            // shadow={false}
            width="100%"
            startContent={
              <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
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
    </>
  );
}

export default FormCard;
