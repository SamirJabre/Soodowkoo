// src/pages/LandingPage.tsx
import "./LandingPage.css";
import LandingButton from "../../base/LandingButton/LandingButton";
import HowToPlay from "../../Components/HowToPlay/HowToPlay";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { showHowToPlay } from '../../redux/slices/displaySlice';

function LandingPage() {
  const dispatch = useAppDispatch();
  const displayHowToPlay = useAppSelector((state) => state.display.displayHowToPlay);

  const handleHowToPlay = () => {
    dispatch(showHowToPlay());
  };

  return (
    <div className="LandingPageContainer">
      <h1>Welcome To Soodowkoo</h1>
      <div className="LandingBtns">
        <LandingButton text="Play" onpress={() => {}} />
        <LandingButton text="How to Play" onpress={handleHowToPlay} />
      </div>
      {displayHowToPlay && <HowToPlay />}
    </div>
  );
}

export default LandingPage;
