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
        }
    }
`;

export default () => {
    const [state, setState] = useState("");

    return (
        <Step>
            <div className="row">
                <div className="six columns">
                    <select
                        name="state"
                        class="form-select"
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
                </div>
            </div>
            {/* <div className="row">
                <div className="six columns">
                    <label>Confirm email</label>
                    <input
                        className="u-full-width"
                        placeholder="Confirm email"
                        type="email"
                        onChange={(e) => setEmailConfirm(e.target.value)}
                        value={emailConfirm}
                    />
                </div>
            </div> */}
        </Step>
    );
};
