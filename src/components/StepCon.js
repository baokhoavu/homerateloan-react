import React, { Component } from "react";

import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import Step4 from "./Step4.js";
import styled from "styled-components";

const StepController = styled.div`
    h1,
    p {
        margin: 0;
        color: #000;
    }
`;

export default class extends Component {
    constructor(props) {
        super(props);
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            email: "",
            username: "",
            password: "",
        };
        // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this);
    }

    // Use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, username, password } = this.state;
        //     alert(`Your registration detail: \n
        //   Email: ${email} \n
        //   Username: ${username} \n
        //   Password: ${password}`)
    };

    // Test current step with ternary
    // _next and _previous functions will be called on button click
    _next() {
        let currentStep = this.state.currentStep;
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep,
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep,
        });
    }

    // The "next" and "previous" button functions
    get previousButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this._prev}
                >
                    Previous
                </button>
            );
        }
        // ...else return nothing
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button"
                    onClick={this._next}
                >
                    Next
                </button>
            );
        }
        // ...else render nothing
        return null;
    }

    // Render UI will go here...
    render() {
        return (
            <React.Fragment>
                <StepController>
                    <h1>A Wizard Form!</h1>
                    <p>Step {this.state.currentStep}</p>

                    <form onSubmit={this.handleSubmit}>
                        <Step1
                            path="/steps"
                            Component={Step1}
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            email={this.state.email}
                        />
                        <Step2
                            path="/steps2"
                            Component={Step2}
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            username={this.state.username}
                        />
                        <Step3
                            path="/steps3"
                            Component={Step3}
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            password={this.state.password}
                        />
                        {this.previousButton}
                        {this.nextButton}
                    </form>
                </StepController>
            </React.Fragment>
        );
    }
}
