import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import dollar from "./images/dollar_coin.jpg";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

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
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
