import "./DiffButton.css";
import { useNavigate } from "react-router-dom";

interface DiffTypes {
  difficultyText: string;
}
function DiffButton({ difficultyText }: DiffTypes) {
  let navigate = useNavigate();
  return (
    <button className="DiffBtn" onClick={() => navigate("/soodowkoo")}>
      {difficultyText}
    </button>
  );
}

export default DiffButton;
