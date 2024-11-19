import "./DiffButton.css";

interface DiffTypes {
  difficultyText: string;
}

function DiffButton({ difficultyText }: DiffTypes) {
  return <button className="DiffBtn">{difficultyText}</button>;
}

export default DiffButton;
