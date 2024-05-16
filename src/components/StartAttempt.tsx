import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [quizInProgress, setQuizInProgress] = useState(false);

    const start = () => {
        setQuizInProgress(true);
        setAttempts(attempts - 1);
    };

    const stop = () => {
        setQuizInProgress(false);
    };

    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <p>Number of attempts left: {attempts} </p>
            <button onClick={start} disabled={quizInProgress || attempts === 0}>
                Start Quiz
            </button>
            <button onClick={stop} disabled={!quizInProgress}>
                Stop Quiz
            </button>
            <button onClick={mulligan} disabled={quizInProgress}>
                Mulligan
            </button>
        </div>
    );
}
