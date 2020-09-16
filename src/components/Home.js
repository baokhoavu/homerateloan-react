import React, { Component } from "react";
import styled from "styled-components";

const FirstPage = styled.div``;

const Gray = styled.div`
    background: rgba(218, 223, 225, 1);
    min-height: 400px;
    flex-wrap: wrap;
    display: flex;
    max-width: 1200px;
`;

const GrayBox = styled.div`
    height: 300px;
    width: 100%;
    // max-width: 1200px;
    flex-wrap: wrap;
    display: flex;

    > div {
        flex: 0 0 33.33%;
        width: 400px;
        margin-top: 25px;

        > h2,
        > h3,
        > p {
            margin: 0;
        }

        h2 {
            font-size: 24px;
            color: rgba(3, 166, 120, 1);
        }

        h3 {
            font-size: 20px;
            color: #000;
        }

        > p {
            font-size: 18px;
            color: #000;
        }
    }
`;

const GrayHead = styled.div`
    &:nth-of-type(1) {
        width: 100%;
        min-width: 1200px;
        max-height: 100px;
        padding-top: 25px;

        a {
            display: inline-block;

            img {
                width: 100%;
                height: auto;
                max-width: 250px;
            }
        }
    }

    &:nth-of-type(3) {
        padding: 0 50px 25px;

        p {
            font-size: 24px;
        }
    }
`;

const BoxContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    max-width: 1200px;
`;

const Box = styled.div`
    flex: 0 0 33.33%;
    width: 400px;

    div {
        height: 500px;
        padding: 0 40px;
    }

    h2 {
        font-size: 30px;
        color: #fff;
        position: relative;
        top: 13rem;
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
                            <h2>I want a New Mortgage Loan on my property.</h2>
                        </div>
                    </Box>
                    <Box>
                        <div>
                            <h2>I'm refinancing to Cash Out.</h2>
                        </div>
                    </Box>
                    <Box>
                        <div>
                            <h2>I'm refinancing to Pay Off Debt.</h2>
                        </div>
                    </Box>
                </BoxContainer>
                <Gray>
                    <GrayHead>
                        <a href="/">
                            <img src="https://homeratesonline.com/static/img/Logo.png" />
                        </a>
                    </GrayHead>
                    <GrayBox>
                        <div>
                            <h2>Afiliations</h2>
                            <h3>Phone</h3>
                            <p>(800)996-8196 Ex 101</p>
                            <h3>Email</h3>
                            <p>info@homeratestoday.com</p>
                            <h3>Address</h3>
                            <p>
                                135 S State College Blvd
                                <br />
                                Brea, CA 92821
                            </p>
                        </div>
                        <div>
                            <h2>Contact</h2>
                            <h3>Phone</h3>
                            <p>(800)996-8196 Ex 101</p>
                            <h3>Email</h3>
                            <p>info@homeratestoday.com</p>
                            <h3>Address</h3>
                            <p>
                                135 S State College Blvd
                                <br />
                                Brea, CA 92821
                            </p>
                        </div>
                        <div>
                            <h2>Licensing</h2>
                            <h3>Phone</h3>
                            <p>(800)996-8196 Ex 101</p>
                            <h3>Email</h3>
                            <p>info@homeratestoday.com</p>
                            <h3>Address</h3>
                            <p>
                                135 S State College Blvd
                                <br />
                                Brea, CA 92821
                            </p>
                        </div>
                    </GrayBox>
                    <GrayHead>
                        <p>
                            HomeRatesOnline.com is not a Financial Service
                            Company, We do not offer loans or charge fees to you
                            for the information we provide. This website is for
                            informational purposes only. Please call or submit
                            your information to be directed to a licensed
                            professional in your area.
                        </p>
                    </GrayHead>
                </Gray>
            </FirstPage>
        );
    }
}
