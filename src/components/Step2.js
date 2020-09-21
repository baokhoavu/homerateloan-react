import React, { Component, setState } from "react";
import styled from "styled-components";

const Step = styled.div`
    min-height: calc(100vh - 628px);

    > div {
        background: #fff;

        form {
            background: #fff;
            position: relative;
            top: 15%;
            padding: 125px 0;
            margin: 0 auto;
            max-width: 1280px;

			h1 {
				color: #000 !important;
				margin: 25px auto;
				font-size: 35px;
				letter-spacing: 1px
			}

			p {
				color: #000;
				margin: 0;
			}

            > div {
                border: 0.05rem solid #dadee4;
                margin: 0 auto;
                max-width: 850px;

				&:nth-child(2) {
					border-bottom: 0;
				}

				&:nth-child(3) {
					border-top: 0;
				}

                select {
					width: 100%;
					max-width: 825px;
					height: 35px;
					padding: 0px 5px;
					border: 0.05rem solid #dadee4;
					outline: none;
					border-radius: 0;
					font-size: 16px;
    				letter-spacing: 0.25px;

                    &:focus {
                        outline: none;
                    }
                }

				
				span {
					color: red;
					font-size: 20px;

				}

                

                button {
                    display: inline-block;
                    height: 38px;
					width: 48.5%;
                    padding: 0 30px;
                    border: 0.05rem solid #5755d9;
                    text-align: center;
                    font-size: 11px;
                    text-transform: uppercase;
                    text-decoration: none;
                    margin: 0 auto 15px;

					&:nth-child(1) {
                    	background: #fff !important;
						color: #5755d9;

						&:hover {
							cursor: pointer;
							background: #5755d9 !important;
							color #fff !important;
						}
					}

					&:nth-child(2) {
                    	background: #5755d9 !important;
						color: #fff;
					
						&:hover {
							cursor: pointer;
							background: #fff !important;
							color #5755d9 !important;
						}

					}

                }
            }
        }
    }
`;

export default class extends Component {
    constructor(props) {
        super(props);
        // Set the initial input values
        this.state = {
            currentStep: 2,
            states: "",
            fields: { states: "" },
            errors: {},
            formIsValid: true,
        };
        // Bind the submission to handleChange()
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    // Use the submitted data to set the state
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
        this.setState({ states: e.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    onClick = () => {
        // console.log(this.state.states);
        this.handleValidation();
    };

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};

        // console.log(fields["states"].length);
        console.log(fields["states"]);
        // console.log(fields);

        if (fields["states"] === "" || fields["states"].length === 0) {
            this.setState({ formIsValid: false });
            errors["states"] = "State is required";
            console.log("a route");
        } else {
            this._next();
            console.log("b route");
        }

        this.setState({ errors: errors });
    }

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
        // if (currentStep) {
        return (
            <button
                className="btn btn-primary float-right"
                type="button"
                onClick={this.onClick}
            >
                Next
            </button>
        );
        // }
        // ...else render nothing
        return null;
    }

    // Render UI will go here...
    render() {
        return (
            <React.Fragment>
                <Step>
                    <div>
                        {/* <p>Step {this.state.currentStep}</p> */}
                        <form>
                            <h1>What state is the property in?</h1>
                            <div>
                                <select
                                    name="state"
                                    className="form-select"
                                    required=""
                                    onChange={this.handleChange.bind(
                                        this,
                                        "states"
                                    )}
                                    value={this.state.fields["states"]}
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
                                    <option value="DC">
                                        District Of Columbia
                                    </option>
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
                                <span style={{ color: "red" }}>
                                    {this.state.errors["states"]}
                                </span>
                            </div>
                            <div>
                                {this.previousButton}
                                {this.nextButton}
                            </div>
                        </form>
                    </div>
                </Step>
            </React.Fragment>
        );
    }
}
