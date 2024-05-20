import React, { useState } from "react";

export function MultipleChoiceQuestions({
    expectedAnswer,
    options
}: {
    expectedAnswer: string;
    options: string[];
}) {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const isCorrect = selectedChoice === expectedAnswer;

    const handleChoiceChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedChoice(event.target.value);
    };

    return (
        <div>
            <label htmlFor="selectedOptions">Select an option:</label>
            <select
                id="selectOptions"
                value={selectedChoice}
                onChange={handleChoiceChange}
                aria-label="Select an option"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrect ? (
                <span style={{ color: "green" }}>✔️</span>
            ) : (
                <span style={{ color: "red" }}>❌</span>
            )}
        </div>
    );
}

export default MultipleChoiceQuestions;
