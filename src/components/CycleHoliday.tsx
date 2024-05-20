import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Christmas", emoji: "🎄" },
    { name: "Halloween", emoji: "🎃" },
    { name: "Easter", emoji: "🥚🐇" },
    { name: "Thanksgiving", emoji: "🦃" },
    { name: "St. Patty:", emoji: "☘️" }
];

export function CycleHoliday(): JSX.Element {
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    const getNextAlphabetically = () => {
        setCurrentHolidayIndex((currentHolidayIndex + 1) % holidays.length);
    };

    const getNextByYear = () => {
        const nextHolidayIndex = (currentHolidayIndex + 1) % holidays.length;
        setCurrentHolidayIndex(nextHolidayIndex);
    };
    const currentHoliday = holidays[currentHolidayIndex];

    return (
        <div>
            <p>Holiday: {currentHoliday.emoji}</p>
            <button onClick={getNextAlphabetically}>Advance by Alphabet</button>
            <button onClick={getNextByYear}>Advance by Year</button>
        </div>
    );
}
