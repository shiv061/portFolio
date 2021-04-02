import ScreenOne from './screenOne';

const RightPannel = ({ screen }) => {
  return <div className="h-screen">{screen === 'home' && <ScreenOne />}</div>;
};

export default RightPannel;
