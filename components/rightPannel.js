import ScreenFour from './screenFour';
import ScreenOne from './screenOne';
import ScreenThree from './screenThree';
import ScreenTwo from './screenTwo';

const RightPannel = ({ screen }) => {
  return (
    <div className="h-screen">
      {screen === 'home' && <ScreenOne />}
      {screen === 'one' && <ScreenTwo />}
      {screen === 'two' && <ScreenThree />}
      {screen === 'three' && <ScreenFour />}
    </div>
  );
};

export default RightPannel;
