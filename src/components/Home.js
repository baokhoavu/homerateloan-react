import React, { Component } from "react";
import styled from "styled-components";

const FirstPage = styled.div`
    flex-wrap: wrap;
    display: flex;
`;

const Box = styled.div`
    flex: 0 0 33%;

    div {
        height: 400px;
    }

    h2 {
        font-size: 30px;
        color: #fff;
        position: relative;
        top: 10rem;
    }

    &:nth-child(1) div {
        background: #1c75bc;
    }

    &:nth-child(2) div {
        background: #2b3990;
    }

    &:nth-child(3) div {
        background: #262262;
    }
`;

export default class Home extends Component {
    render() {
        return (
            <FirstPage>
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
            </FirstPage>
        );
    }
}
