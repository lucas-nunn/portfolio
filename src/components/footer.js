import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Center from "../components/center";
import TitleBar from "./titleBar.js";
import Sizes from "../styles/sizes";
import "../styles/global.css";

// --------------------------------------
// Footer: displays meta info for website
// --------------------------------------
const Footer = () => {
    return (
        <Center>
            <Container>
                <Link to="/">home</Link>
                <Link to="/projects">projects</Link>
                <Link as="a" href="https://github.com/lucnunn">
                    <AiOutlineGithub />
                </Link>
                <Link as="a" href="https://www.linkedin.com/in/lnunn/">
                    <AiFillLinkedin />
                </Link>
                <Link to="/contact">contact</Link>
                <Link to="/pets">pets</Link>
            </Container>
        </Center>
    );
};

// ---------------------
// Hold the footer links
// ---------------------
const Container = styled(TitleBar)`
    padding: ${Sizes.mediumSpace};
    max-width: 400px;
`;

// ------------------
// Link in the footer
// ------------------
const Link = styled(GatsbyLink)`
    text-decoration: none;
    color: black;
    padding: ${Sizes.smallSpace};
`;

export default Footer;
