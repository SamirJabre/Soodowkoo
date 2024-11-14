import './LandingButton.css'

interface LandingButtonProps {
  text: string;
}
function LandingButton({ text }: LandingButtonProps) {
  return (
    <button className="LandingBtn">
        {text}
    </button>
  )
}

export default LandingButton