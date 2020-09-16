import React from "react";
import MultiStep from "react-multistep";
import "./App.css";
// import "./css/style.css";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import StepOne from "./components/step-01.js";
import StepTwo from "./components/step-02.js";
import StepThree from "./components/step-03.js";
import StepFour from "./components/step-04.js";

const steps = [
    { component: <StepOne /> },
    { component: <StepTwo /> },
    { component: <StepThree /> },
    { component: <StepFour /> },
];

const Container = styled.div`
    min-width: 1480px;
    min-height: 1000px;
    max-width: 1480px;
    // height: 100%;
    // border: 2px solid #000;
    // background: #fff;

    ol {
        padding-bottom: 2em;
        margin: 1em auto;

        li {
            width: 20%;

            span {
                position: relative;
                left: -0.65rem;
                bottom: 1rem;
            }

            &::before {
                left: 6.5rem;
                line-height: 1.3em;
                bottom: -3.4rem;
            }
        }
    }

    @media screen and (max-width: 1280px) {
        min-width: 768px;
        min-height: 500px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        min-width: unset;
    }

    @media screen and (max-width: 550px) {
        width: 95%;
        margin: 0 2.5%;
    }
`;

const Green = styled.div`
    background: rgba(0, 177, 106, 1);
    min-height: 40px;
    line-height: 2.5;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;

const prevStyle = { background: "#33c3f0", "border-width": "2px" };
const nextStyle = { background: "#33c3f0", "border-width": "2px" };

function App() {
    return (
        <div className="App">
            <Green>Bad Credit and Stated Income Programs Available.</Green>
            <header className="App-header">
                <div className="container">
                    <BrowserRouter basename={"/"}>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/steps">
                                <MultiStep
                                    steps={steps}
                                    prevStyle={prevStyle}
                                    nextStyle={nextStyle}
                                />
                            </Route>
                            <Route component={Error} />
                        </Switch>
                    </BrowserRouter>
                    {/* <Container>
                        <div className="container app-footer">
                            <h6>
                                Press 'Enter' or click on progress bar for next
                                step.
                            </h6>
                            Code is on{" "}
                            <a
                                href="https://github.com/Srdjan/react-multistep"
                                target="_blank"
                            >
                                github
                            </a>
                        </div>
                    </Container> */}
                </div>
            </header>
        </div>
    );
}

export default App;
