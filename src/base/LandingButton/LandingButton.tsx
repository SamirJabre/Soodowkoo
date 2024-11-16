import './LandingButton.css'

interface LandingButtonProps {
  text: string;
  onpress: () => void;
}
function LandingButton({ text , onpress}: LandingButtonProps) {
  return (
    <button className="LandingBtn" onClick={onpress}>
        {text}
    </button>
  )
}

export default LandingButton