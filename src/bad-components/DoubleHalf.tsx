// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface double {
    dd: () => void;
}
interface halve {
    hv: () => void;
}

function Doubler({ dd }: double): JSX.Element {
    return <Button onClick={dd}>Double</Button>;
}

function Halver({ hv }: halve): JSX.Element {
    return <Button onClick={hv}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function doubleFunctionCall() {
        setDhValue((val) => val * 2);
    }

    function halveFunctionCall() {
        setDhValue((val) => val * 0.5);
    }

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dd={doubleFunctionCall}></Doubler>
            <Halver hv={halveFunctionCall}></Halver>
        </div>
    );
}
