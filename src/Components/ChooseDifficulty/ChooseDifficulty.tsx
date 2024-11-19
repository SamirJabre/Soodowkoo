import "./ChooseDifficulty.css";
import back_icon from "../../assets/icons/X_icon.png";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { hideDifficulty } from "../../redux/slices/diplayDiffSlice";
import DiffButton from "../../base/DiffButton/DiffButton";

function ChooseDifficulty() {
  const dispatch = useAppDispatch();
  const displayDifficulty = useAppSelector(
    (state) => state.displayDifficulty.displayDifficulty
  );

  const hideDifficultyHandler = () => {
    dispatch(hideDifficulty());
  };

  if (!displayDifficulty) return null;

  return (
    <div className="difficultyContainer">
      <div className="diffUpper">
        <div onClick={hideDifficultyHandler}>
          <img src={back_icon} alt="Back Icon" />
        </div>
        <h1>Choose Difficulty</h1>
        <div></div>
      </div>
      <div className="diffLower">
        <DiffButton difficultyText="Easy" />
        <DiffButton difficultyText="Medium" />
        <DiffButton difficultyText="Hard" />
      </div>
    </div>
  );
}

export default ChooseDifficulty;
