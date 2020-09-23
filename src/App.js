import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import Footer from "./components/Footer.js";

// import Step1 from "./components/Step1.js";
// import Step2 from "./components/Step2.js";
// import Step3 from "./components/Step3.js";
// import Step4 from "./components/Step4.js";

import StepCon from "./components/StepCon.js";

const Green = styled.div`
    background: rgba(0, 177, 106, 1);
    min-height: 40px;
    line-height: 2.5;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;

function App() {
    return (
        <div className="App">
            <Green>Bad Credit and Stated Income Programs Available.</Green>
            <header className="App-header">
                <div className="container">
                    <BrowserRouter basename={"/"}>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/steps" component={StepCon} exact />

                            {/* <Route path="/steps" component={Step1} exact />
                            <Route path="/step2" component={Step2} exact />
                            <Route path="/step3" component={Step3} />
                            <Route path="/step4" component={Step4} /> */}

                            <Route component={Error} />
                        </Switch>
                    </BrowserRouter>
                    <Footer></Footer>
                </div>
            </header>
        </div>
    );
}

export default App;
