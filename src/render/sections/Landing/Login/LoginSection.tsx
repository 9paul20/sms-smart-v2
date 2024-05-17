import { Divider, Image, Spacer } from "@nextui-org/react";
import Footer from "../../../components/Sections/Landing/Login/Footer";
import FormCard from "../../../components/Sections/Landing/Login/FormCard";
import EBlackImage from "../../../assets/icons/E-black.png";

function LoginSection() {
  return (
    <>
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
      <FormCard />
      <Spacer y={4} />
      <Divider />
      <Footer />
    </>
  );
}

export default LoginSection;
