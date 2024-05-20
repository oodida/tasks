import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button, Container, Row, Col } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";
import dollar from "./images/dollar_coin.jpg";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestions } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript: Hello World, This is
                Olive Odida
            </header>
            <h2>This is a new secondary header</h2>
            <img
                src={dollar}
                alt="A picture of a two dollar coin"
                width="500"
                height="500"
            />
            <ul>
                <li>Blacklist</li>
                <li>Love is Blind</li>
                <li>Avatar the Last Airbender</li>
                <li>Beyond the Boundary</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column return{" "}
                        <div
                            style={{
                                border: "100px solid red",
                                padding: "0px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column return{" "}
                        <div
                            style={{
                                border: "100px solid red",
                                padding: "0px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr />
            <CheckAnswer expectedAnswer="42" />
            <hr />
            <GiveAttempts />
            <hr />
            <EditMode />
            <hr />
            <ChangeColor />
            <hr />
            <MultipleChoiceQuestions
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestions>
            <hr />
            <DoubleHalf />
            <hr />
            <ChooseTeam />
            <hr />
            <ColoredBox />
            <hr />
            <ShoveBox />
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
            <hr />
            <CycleHoliday />
        </div>
    );
}

export default App;
