import React, { useState } from "react";
import styled from "styled-components";

const Step = styled.div`
    min-height: 200px;
    margin-top: 100px;

    h2 {
        color: #000 !important;
    }
    .columns {
        border: 1px solid #000;
        width: 500px;
        margin: 0 auto;
        padding: 15px 25px 25px;

        input {
            width: 485px;
            padding: 5px;
            border: 1px solid #000;
            border-radius: 0;

            &:focus {
                outline: none;
            }
        }
    }
`;

export default () => {
    const [name, setName] = useState("");

    return (
        <Step>
            <h2>What is your name?</h2>
            <div className="row">
                <div className="six columns">
                    <input
                        className="u-full-width"
                        placeholder="Jane Doe"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        autoFocus
                    />
                </div>
            </div>
        </Step>
    );
};
