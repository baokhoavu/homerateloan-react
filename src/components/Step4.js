import React, { Component } from "react";
import styled from "styled-components";
// import { subscriber, messageService } from "./messageService.js";
// import { BehaviorSubject } from 'rxjs';

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

                input {
                    width: 100%;
                    max-width: 800px;
                    height: 25px;
                    padding: 0 7.5px;
					border: 0.05rem solid #dadee4;
					outline: none;
					border-radius: 0;

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
					width: 49%;
                    padding: 0 30px;
                    border: 0.05rem solid #5755d9;
                    color: #fff !important;
                    text-align: center;
                    font-size: 11px;
                    text-transform: uppercase;
                    text-decoration: none;
                    margin-bottom: 25px;
                    margin-top: 25px;
                    background: #5755d9 !important;

					&:hover {
						cursor: pointer;
						background: #fff !important;
						color #5755d9 !important;
					}
                }
            }
        }
    }
`;

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            name: "",
            fields: { name: "" },
            errors: {},
            formIsValid: true,
        };

        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
        this.setState({ name: e.target.value });
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};

        console.log(this.state.fields["name"]);

        //Name
        if (
            fields["name"] === "" ||
            fields["name"].length === 0 ||
            typeof fields["name"] === "undefined"
        ) {
            this.setState({ formIsValid: false });
            errors["name"] = "Name is required";
            console.log("a route");
        } else {
            this._next();
            console.log("b route");
        }

        //Email
        // if(!fields["email"]){
        // 	formIsValid = false;
        // 	errors["email"] = "Cannot be empty";
        // }

        // if(typeof fields["email"] !== "undefined"){
        // 	let lastAtPos = fields["email"].lastIndexOf('@');
        // 	let lastDotPos = fields["email"].lastIndexOf('.');

        // 	if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        // 		formIsValid = false;
        // 		errors["email"] = "Email is not valid";
        // 	}
        // }

        this.setState({ errors: errors });
    }

    onClick = () => {
        this.handleValidation();
        // console.log(this.state.name);

        // if (this.state.formIsValid === false) {
        //     console.log("wroong");
        // } else {
        //     this._next();
        // }

        // const { name } = this.state;
        //     alert(`Your registration detail: \n
        //   Email: ${email} \n
        //   Username: ${username} \n
        //   Password: ${password}`)
    };

    _next() {
        window.location = "/step2";
    }

    get nextButton() {
        return (
            <button type="button" onClick={this.onClick}>
                Next
            </button>
        );
    }

    // componentWillMount() {
    //     console.log(this.state.currentStep);
    // }

    render() {
        return (
            <React.Fragment>
                <Step>
                    <div>
                        {/* <p>Step {this.state.currentStep}</p> */}
                        <form>
                            <h1>What is your name?</h1>
                            <div>
                                <input
                                    type="text"
                                    size="30"
                                    placeholder="Name"
                                    onChange={this.handleChange.bind(
                                        this,
                                        "name"
                                    )}
                                    value={this.state.fields["name"]}
                                />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["name"]}
                                </span>
                                <div>
                                    {this.previousButton}
                                    {this.nextButton}
                                </div>
                            </div>
                        </form>
                    </div>
                </Step>
            </React.Fragment>
        );
    }
}
