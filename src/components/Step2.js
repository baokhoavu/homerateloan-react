import React, { Component, setState } from "react";
import styled from "styled-components";

const Step = styled.div`
    h1,
    p {
        color: #000;
        margin: 0;
    }
`;

export default class extends Component {
    constructor(props) {
        super(props);
        // Set the initial input values
        this.state = {
            currentStep: 2, // Default is Step 1
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
        // const { email, username, password } = this.state;
        //     alert(`Your registration detail: \n
        //   Email: ${email} \n
        //   Username: ${username} \n
        //   Password: ${password}`)
    };

    // Test current step with ternary
    // _next and _previous functions will be called on button click
    _next() {
        window.location = "/step3";
    }

    _prev() {
        window.location = "/steps";
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
                <Step>
                    <h1>State!</h1>
                    <p>Step {this.state.currentStep}</p>

                    <form onSubmit={this.handleSubmit}>
                        <select
                            name="state"
                            className="form-select"
                            required=""
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="">Choose an option</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        {this.previousButton}
                        {this.nextButton}
                    </form>
                </Step>
            </React.Fragment>
        );
    }
}
