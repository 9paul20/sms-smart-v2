import LoginSection from "../../sections/Landing/Login/LoginSection";
import SwitchThemeSection from "../../sections/Landing/Login/SwitchThemeSection";

function indexLanding() {
  return (
    <>
      <div className="flex flex-col items-center max-w-sm w-full mx-auto">
        <SwitchThemeSection />
        <LoginSection />
      </div>
    </>
  );
}

export default indexLanding;
