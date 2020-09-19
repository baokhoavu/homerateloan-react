import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Gray = styled.div`
    width: 100vw;
    background: rgba(238, 238, 238, 1);
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0;
    bottom: 0;

    > div {
        min-height: 400px;
        flex-wrap: wrap;
        display: flex;
        max-width: 1200px;
        margin: 0 auto;
    }
`;

const GrayBox = styled.div`
    height: 300px;
    width: 100%;
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
            margin-bottom: 15px;
        }

        h3 {
            font-size: 20px;
            color: #000;
            margin-bottom: 5px;
        }

        > p {
            font-size: 16px;
            color: #000;
        }

        img {
            width: 100%;
            max-width: 125px;
            height: auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
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
        padding: 50px 50px 25px;

        p {
            font-size: 20px;
            color: grey;
            line-height: 0.9;
        }
    }
`;

export default () => {
    return (
        <Gray>
            <div>
                <GrayHead>
                    <a href="/">
                        <img
                            alt=""
                            src="https://homeratesonline.com/static/img/Logo.png"
                        />
                    </a>
                </GrayHead>
                <GrayBox>
                    <div>
                        <h2>Afiliations</h2>
                        <img
                            alt=""
                            src="https://homeratesonline.com/static/img/Zillow.jpg"
                        />
                        <br />
                        <img
                            alt=""
                            src="https://homeratesonline.com/static/img/NAHB.png"
                        />
                        <br />
                        <img
                            alt=""
                            src="https://homeratesonline.com/static/img/Realtor.jpg"
                        />
                        <br />
                        <img
                            alt=""
                            src="https://homeratesonline.com/static/img/Trulia.jpg"
                        />
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
                        <img
                            alt=""
                            src="https://homeratesonline.com/static/img/Eho.png"
                        />
                        <br />
                        <img
                            alt=""
                            src="https://homeratesonline.com/static/img/Ehl.png"
                        />
                        <br />
                    </div>
                </GrayBox>
                <GrayHead>
                    <p>
                        HomeRatesOnline.com is not a Financial Service Company,
                        We do not offer loans or charge fees to you for the
                        information we provide. This website is for
                        informational purposes only. Please call or submit your
                        information to be directed to a licensed professional in
                        your area.
                    </p>
                </GrayHead>
            </div>
        </Gray>
    );
};
