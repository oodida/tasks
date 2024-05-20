import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isSeen, setIsSeen] = useState(false);
    const visible = () => {
        setIsSeen(!isSeen);
    };
    return (
        <span>
            <Button onClick={visible}>Reveal Answer</Button>
            {isSeen && <p>42</p>}
        </span>
    );
}
