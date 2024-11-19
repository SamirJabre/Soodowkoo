import "./LandingPage.css";
import LandingButton from "../../base/LandingButton/LandingButton";
import HowToPlay from "../../Components/HowToPlay/HowToPlay";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { showHowToPlay } from "../../redux/slices/displaySlice";
import { showDifficulty } from "../../redux/slices/diplayDiffSlice";
import ChooseDifficulty from "../../Components/ChooseDifficulty/ChooseDifficulty";

function LandingPage() {
  const dispatch = useAppDispatch();

  const displayHowToPlay = useAppSelector(
    (state) => state.display.displayHowToPlay
  );

  const displayDifficulty = useAppSelector(
    (state) => state.displayDifficulty.displayDifficulty
  );

  const handleHowToPlay = () => {
    dispatch(showHowToPlay());
  };

  const handleDifficulty = () => {
    dispatch(showDifficulty());
  };

  return (
    <div className="LandingPageContainer">
      <h1>Welcome To Soodowkoo</h1>
      <div className="LandingBtns">
        <LandingButton text="Play" onpress={handleDifficulty} />
        <LandingButton text="How to Play" onpress={handleHowToPlay} />
      </div>
      {displayDifficulty && <ChooseDifficulty />}
      {displayHowToPlay && <HowToPlay />}
    </div>
  );
}

export default LandingPage;
