import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { VscChromeClose } from "react-icons/vsc";
import { FiSend } from "react-icons/fi";
import Footer from "../components/footer.js";
import TitleBar from "../components/titleBar.js";
import Title from "../components/title.js";
import PageCenter from "../components/pageCenter.js";
import Paragraph from "../components/paragraph.js";
import Sizes from "../styles/sizes.js";
import "../styles/global.css";

// ----------------------------------------------------------------------
// Contact page: allows for sending me an email straight from the website
// ----------------------------------------------------------------------
const ContactPage = () => {
    /* track form state */
    const [from, setFrom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    /* track sending state */
    const [fillingOut, setFillingOut] = useState(true); /* Filling out form */
    const [isSending, setIsSending] = useState(false); /* Email being sent */
    const [hasSent, setHasSent] = useState(false); /* Email sent successfully */
    const [errorSending, setErrorSending] =
        useState(false); /* Email failed to send */

    /*
     * Send an email to me using emailjs
     */
    const sendEmail = async () => {
        /* check the form has been filled out */
        if (formFilledOut()) {
            setIsSending(true);
            setFillingOut(false);

            /* email content */
            const templateParams = {
                from_name: from,
                reply_to: email,
                message: message,
            };

            /* send email with emailjs api */
            try {
                const response = await emailjs.send(
                    process.env.GATSBY_EMAILJS_SERVICE_ID,
                    process.env.GATSBY_EMAILJS_TEMPLATE_ID,
                    templateParams,
                    process.env.GATSBY_EMAILJS_USER_ID
                );

                /* Email sent successfully */
                console.log("success", response.status, response.text);
                setIsSending(false);
                setFillingOut(false);
                setHasSent(true);
            } catch (error) {
                /* Email failed to send */
                console.log("Failed", error);
                setIsSending(false);
                setFillingOut(true);
                setErrorSending(true);

                setFrom("");
                setEmail("");
                setMessage("");
            }
        }
    };

    /*
     * Check if the form fields have been filled out
     * @return -> boolean whether form is filled out
     */
    const formFilledOut = () => {
        return from.length > 0 && email.length > 0 && message.length > 0;
    };

    /*
     * Component markup
     */
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lucas Nunn - Contact</title>
            </Helmet>
            <PageCenter>
                <Container>
                    {/* email is sending */}
                    {isSending && <h1>...</h1>}

                    {/* email has sent */}
                    {hasSent && (
                        <div>
                            <TitleBar>
                                <Title>Roger</Title>
                                <TitleButton>
                                    <Link to="/">
                                        <VscChromeClose />
                                    </Link>
                                </TitleButton>
                            </TitleBar>
                            <Paragraph>
                                I received your message! <br />
                                <br />I will get back to you as soon as
                                possible. In the mean time, check out my cute{" "}
                                <Link to="/pets">pets</Link>.
                            </Paragraph>
                        </div>
                    )}

                    {/* form is being filled out */}
                    {fillingOut && (
                        <div>
                            <TitleBar>
                                <Title>Contact</Title>
                                {/* link home if form isn't full */}
                                {!formFilledOut() && (
                                    <TitleButton>
                                        <Link to="/">
                                            <VscChromeClose />
                                        </Link>
                                    </TitleButton>
                                )}
                                {/* send button if form is full */}
                                {formFilledOut() && (
                                    <TitleButton onClick={() => sendEmail()}>
                                        <FiSend />
                                    </TitleButton>
                                )}
                            </TitleBar>
                            <IdentifierBox>
                                <Input
                                    type="text"
                                    value={from}
                                    placeholder="Your name"
                                    onChange={(e) => {
                                        setFrom(e.target.value);
                                        setErrorSending(false);
                                    }}
                                />
                                <Input
                                    type="text"
                                    value={email}
                                    placeholder="Your email"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrorSending(false);
                                    }}
                                />
                            </IdentifierBox>
                            <MessageInput
                                as="textarea"
                                value={message}
                                placeholder="Your questions, comments, or concerns"
                                rows="10"
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    setErrorSending(false);
                                }}
                            />
                            {errorSending && (
                                <Error>
                                    Whoops, the email failed to send. I probably
                                    ran out of free emails this month 😔. You
                                    can try again or send me one{" "}
                                    <Error
                                        as="a"
                                        href="mailto:luc.nunn@gmail.com"
                                    >
                                        manually
                                    </Error>
                                </Error>
                            )}
                        </div>
                    )}
                </Container>
            </PageCenter>
            <Footer />
        </div>
    );
};

// ------------------------
// Specific-width container
// ------------------------
const Container = styled.div`
    width: 650px;
    border: 1px solid grey;
    padding: ${Sizes.mediumSpace};

    @media (max-width: ${Sizes.mediumScreen}) {
        width: 100%;
        margin: ${Sizes.mediumSpace};
    }

    @media (max-width: ${Sizes.smallScreen}) {
        margin: ${Sizes.smallSpace};
    }
`;

// -------------------------------------
// Button for going back home or sending
// -------------------------------------
const TitleButton = styled.button`
    background: none;
    border: none;
    font-size: ${Sizes.xlText};

    @media (max-width: ${Sizes.mediumScreen}) {
        font-size: ${Sizes.largeText};
    }

    @media (max-width: ${Sizes.smallScreen}) {
        font-size: ${Sizes.mediumText};
    }

    &:hover {
        cursor: pointer;
    }
`;

// ------------------------------
// Hold the name and email inputs
// ------------------------------
const IdentifierBox = styled(TitleBar)`
    margin: ${Sizes.largeSpace} 0px;

    @media (max-width: ${Sizes.mediumScreen}) {
        margin: ${Sizes.mediumSpace} 0px;
    }
`;

// -----------------------
// Text input for the form
// -----------------------
const Input = styled.input`
    display: block;
    border: none;
    font-size: ${Sizes.mediumText};
    border-bottom: 1px solid grey;
    background-color: transparent;
    width: 45%;
    resize: none;

    @media (max-width: ${Sizes.smallScreen}) {
        font-size: ${Sizes.smallText};
    }

    &:focus {
        outline: none;
    }
`;

// ---------------
// Text area input
// ---------------
const MessageInput = styled(Input)`
    width: 100%;
    border-bottom: none;

    margin: ${Sizes.largeSpace} 0px;

    @media (max-width: ${Sizes.mediumScreen}) {
        margin: ${Sizes.mediumSpace} 0px;
    }
`;

// -------------------------------------
// Error message if email failed to send
// -------------------------------------
const Error = styled.text`
    font-size: ${Sizes.smallText};
    color: red;
`;

// --------------------
// Links to other pages
// --------------------
const Link = styled(GatsbyLink)`
    color: black;
`;

export default ContactPage;
