import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Enter your answer"
            />
            {userAnswer === expectedAnswer ? (
                <span style={{ color: "green" }}>✔️</span>
            ) : (
                <span style={{ color: "red" }}>❌</span>
            )}
        </div>
    );
}

export default CheckAnswer;
