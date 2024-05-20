import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //starts as short answer question
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const handleChangeType = () => {
        setQuestionType((prevType) =>
            prevType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };

    return (
        <div>
            {questionType === "multiple_choice_question" && (
                <p>Multiple Choice</p>
            )}
            {questionType === "short_answer_question" && <p>Short Answer</p>}
            <button onClick={handleChangeType}>Change Type</button>
        </div>
    );
}
