import React, { useState } from "react";

export function ChangeColor() {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "cyan",
        "magenta"
    ];
    const [selectedColor, setSelectedColor] = useState("red");

    const handleColorChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            {colors.map((color) => (
                <label key={color}>
                    <input
                        type="radio"
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorChange}
                    />
                    {color}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    width: "100px",
                    height: "100px",
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}

export default ChangeColor;
