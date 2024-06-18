import { useEffect, useState } from "react";

function ScoreBoard ({ score }) {
    const [ bestScore, setBestScore ] = useState(0);

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
        }
    }, [score, bestScore])

    return (
        <div className="ScoreBoard">
            <h3>Score: {score}</h3>
            <h3>Best Score: {bestScore}</h3>
        </div>
    );
}

export default ScoreBoard;