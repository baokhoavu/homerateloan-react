import React, { Component } from "react";
import PropTypes from "prop-types";
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
// import Step4 from "./Step4.js";
import styled from "styled-components";

const StepController = styled.div`
    h1,
    p {
        margin: 0;
        color: #000;
    }
`;

class StepsController extends Component {
    constructor(props) {
        super(props);
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            email: "",
            username: "",
            password: "",
            page: 1,
        };
        // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    // Use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault();
    };

    // Render UI will go here...
    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return (
            <StepController>
                {page === 1 && <Step1 onSubmit={this.nextPage} />}
                {page === 2 && (
                    <Step2
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <Step3
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                    />
                )}

                {/* <h1>A Wizard Form!</h1>
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
				</form> */}
            </StepController>
        );
    }
}

StepsController.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default StepsController;
