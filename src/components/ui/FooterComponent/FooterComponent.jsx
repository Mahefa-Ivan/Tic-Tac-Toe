import "./FooterComponent.css";
import { BiReset } from "react-icons/bi";

export default function FooterComponent({ buttonOnClick, score }) {
  return (
    <footer className="board-footer">
      <div className="card">
        <span className="card-score-owner">Player (X)</span>
        <span className="card-score">{score.x}</span>
      </div>
      <div className="card">
        <span className="card-score-owner">Draw</span>
        <span className="card-score">{score.draw}</span>
      </div>
      <div className="card">
        <span className="card-score-owner">Player (O)</span>
        <span className="card-score">{score.o}</span>
      </div>
      <button onClick={buttonOnClick || (() => true)} className="reset-button">
        <BiReset />
      </button>
    </footer>
  );
}
