import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface changeColor {
    changeTheColor?: () => void;
}

interface changeColorIndex {
    colorIndex: number;
}

function ChangeColor({ changeTheColor }: changeColor): JSX.Element {
    return <Button onClick={changeTheColor}>Next Color</Button>;
}

function ColorPreview({ colorIndex }: changeColorIndex): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function changeTheColor() {
        setColorIndex((1 + colorIndex) % COLORS.length);
    }
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor changeTheColor={changeTheColor}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
