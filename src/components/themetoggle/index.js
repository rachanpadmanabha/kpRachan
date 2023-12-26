import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { useTheme } from "../../hooks/themeContext.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const Themetoggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="nav_ac" onClick={toggleTheme}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
