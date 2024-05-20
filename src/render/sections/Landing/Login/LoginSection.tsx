import { Divider, Image, Spacer } from "@nextui-org/react";
import { SectionProps } from "../../../../js/interfaces";
import Footer from "../../../components/Sections/Landing/Login/Footer";
import FormCard from "../../../components/Sections/Landing/Login/FormCard";
import EBlackImage from "../../../assets/icons/E-black.png";
import EWhiteImage from "../../../assets/icons/E-white.png";
import { useSwitchThemeStore } from "../../../../js/consts/SwitchThemeStore";

const LoginSection: React.FC<SectionProps> = ({ classNameSection }) => {
  const { theme } = useSwitchThemeStore();
  return (
    <>
      <div className={classNameSection}>
        <Image
          isBlurred
          isZoomed
          width={200}
          src={theme === "light" ? EBlackImage : EWhiteImage}
          // fallbackSrc="https://via.placeholder.com/300x200"
          alt="Express Milac Logo"
        />
        <p className="text-4xl">Milac SMS Smart</p>
        <Spacer y={4} />
        <FormCard />
        <Spacer y={4} />
        <Divider />
        <Footer />
      </div>
    </>
  );
};

export default LoginSection;
