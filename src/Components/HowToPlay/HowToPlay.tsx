import './HowToPlay.css';
import back_icon from '../../assets/icons/X_icon.png';
import { useAppDispatch } from '../../hooks';
import { hideHowToPlay } from '../../redux/slices/displaySlice';

function HowToPlay() {
  const dispatch = useAppDispatch();

  const hideHowToPlayHandler = () => {
    dispatch(hideHowToPlay());
  };

  return (
    <div className="howToPlayContainer">
      <div className="upperText">
        <div onClick={hideHowToPlayHandler}>
          <img src={back_icon} alt="Back Icon" />
        </div>
        <h1>How To Play</h1>
        <div></div>
      </div>
      <div className="rulesContainer">
        <ul>
          <li>Objective: Fill a 9x9 grid so that each row, column, and 3x3 subgrid contains all numbers from 1 to 9, without any repetitions.</li>
          <li>Start with Given Numbers: Some numbers are already provided in the grid. Use them as clues to fill in the remaining empty cells.</li>
          <li>No Repeating Numbers: Each number (1-9) can only appear once in each row, column, and 3x3 subgrid.</li>
          <li>Use Logic and Elimination: Identify possible numbers for each empty cell by considering other numbers in the row, column, and subgrid. Gradually eliminate options.</li>
          <li>Complete the Puzzle: Continue filling in cells until the entire grid satisfies the rules.</li>
        </ul>
      </div>
    </div>
  );
}

export default HowToPlay;
