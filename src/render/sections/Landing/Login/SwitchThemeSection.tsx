import type { SectionProps } from '../../../../js/interfaces';
import SwitchTheme from '../../../components/UI/SwitchTheme';

const SwitchThemeSection: React.FC<SectionProps> = ({ classNameSection }) => {
  return (
    <>
      <div className={classNameSection}>
        <SwitchTheme />
      </div>
    </>
  );
};

export default SwitchThemeSection;
