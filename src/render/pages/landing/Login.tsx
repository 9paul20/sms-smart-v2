import LoginSection from '../../sections/Landing/Login/LoginSection';
import SwitchThemeSection from '../../sections/Landing/Login/SwitchThemeSection';

function indexLanding() {
  return (
    <>
      <SwitchThemeSection classNameSection="flex flex-col items-end w-full pr-8" />
      <div className="flex flex-col items-center">
        <LoginSection classNameSection="flex flex-col text-center items-center w-full max-w-sm" />
      </div>
    </>
  );
}

export default indexLanding;
