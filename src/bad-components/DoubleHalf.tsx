import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): JSX.Element {
    const handleDouble = () => {
        setDhValue(2 * dhValue);
    };
    return <Button onClick={handleDouble}>Double</Button>;
}

function Halver(): JSX.Element {
    const handleHalve = () => {
        setDhValue(0.5 * dhValue);
    };
    return <Button onClick={handleHalve}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [value, setValue] = useState(dhValue);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler />
            <Halver />
        </div>
    );
}
