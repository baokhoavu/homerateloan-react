import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FirstPage = styled.div``;

const BoxContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    top: 75px;
`;

const Box = styled.div`
    flex: 0 0 33.33%;
    width: 400px;

    > div {
        height: 500px;
        padding: 0 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);

        > div {
            position: relative;
            top: 13rem;

            a {
                color: #fff;
                text-decoration: none;
                background: green;
                border-radius: 25px;
                padding: 0 25px 5px;
            }
        }
    }

    &:nth-child(1) > div > div {
        position: relative;
        top: 10.75rem;

        h2 {
            height: 135px;
        }
    }

    h2 {
        font-size: 28px;
        color: #fff;
        height: 100px;

        span {
            color: rgba(228, 120, 51, 1);
        }
    }

    &:nth-child(1) div {
        background: rgba(137, 196, 244, 1);
    }

    &:nth-child(2) div {
        background: rgba(65, 131, 215, 1);
    }

    &:nth-child(3) div {
        background: rgba(75, 119, 190, 1);
    }
`;

export default class Home extends Component {
    render() {
        return (
            <FirstPage>
                <BoxContainer>
                    <Box>
                        <div>
                            <div>
                                <h2>
                                    I want a <br />
                                    <span>New Mortgage Loan</span>
                                    <br />
                                    on my property.
                                </h2>
                                <Link to="/steps">Continue</Link>
                            </div>
                        </div>
                    </Box>
                    <Box>
                        <div>
                            <div>
                                <h2>I'm refinancing to Cash Out.</h2>
                                <Link to="/steps">Continue</Link>
                            </div>
                        </div>
                    </Box>
                    <Box>
                        <div>
                            <div>
                                <h2>I'm refinancing to Pay Off Debt.</h2>
                                <Link to="/steps">Continue</Link>
                            </div>
                        </div>
                    </Box>
                </BoxContainer>
            </FirstPage>
        );
    }
}
