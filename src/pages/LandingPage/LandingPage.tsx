import "./LandingPage.css";
import LandingButton from "../../base/LandingButton/LandingButton";

function LandingPage() {
  return <div className="LandingPageContainer">
    <h1>Welcome To Soodowkoo</h1>
    <div className="LandingBtns">
    <LandingButton text="Play" />
    <LandingButton text="How to Play" />
    </div>

  </div>;
}

export default LandingPage;
