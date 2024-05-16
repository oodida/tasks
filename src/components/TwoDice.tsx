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
    const [rightDie, setRightDie] = useState(() => {
        let roll = d6();
        while (roll === leftDie) {
            roll = d6();
        }
        return roll;
    });

    const rollLeft = () => {
        const roll = d6();
        setLeftDie(roll);
        if (roll === 1 && rightDie === 1) {
            alert("You rolled snake eyes! You lose!");
        }
    };

    const rollRight = () => {
        const roll = d6();
        setRightDie(roll);
        if (leftDie === 1 && roll === 1) {
            alert("You rolled snake eyes! You lose!");
        }
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
            {leftDie === rightDie && leftDie === 1 && (
                <p>You rolled snake eyes! You lose!</p>
            )}
            {leftDie === rightDie && leftDie !== 1 && (
                <p>You rolled a pair! You win!</p>
            )}
        </div>
    );
}
