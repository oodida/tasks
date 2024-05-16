/* eslint-disable prettier/prettier */
import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(d6());
    const [rightDie, setRightDie] = useState(d6());

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    const lose = leftDie === 1 && rightDie === 1;
    const win = leftDie === rightDie && !lose;
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <button onClick={rollLeft} disabled={win || lose}>
                Roll Left
            </button>
            <span data-testid="right-die">{rightDie}</span>
            <button onClick={rollRight} disabled={win || lose}>
                Roll Right
            </button>
            {lose && <p>You rolled snake eyes! You lose</p>}
            {win && <p>You rolled a pair! You win!</p>}
        </div>
    );
}
