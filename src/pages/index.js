/* eslint-disable react/jsx-no-comment-textnodes */

import React from "react";
import { Helmet } from "react-helmet";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import Footer from "../components/footer";
import Title from "../components/title";
import PageCenter from "../components/pageCenter";
import Paragraph from "../components/paragraph";
import Sizes from "../styles/sizes";
import "../styles/global.css";

// --------------------------------------
// Index page: starting point for website
// --------------------------------------
const IndexPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lucas Nunn</title>
            </Helmet>
            <PageCenter>
                <Container>
                    <Title>Hello, Im Lucas</Title>
                    <Paragraph>
                        I study CS at Virginia Tech. I enjoy web development{" "}
                        <Comment>/* especially using React */</Comment>,
                        programming, my <Link to="/pets">pets</Link>, and
                        meditating.
                    </Paragraph>
                    <Paragraph>
                        You can check out my{" "}
                        <Link to="/projects">projects</Link>, follow me on{" "}
                        <Link as="a" href="https://github.com/lucnunn">
                            Github
                        </Link>{" "}
                        &&{" "}
                        <Link as="a" href="https://www.linkedin.com/in/lnunn/">
                            Linkedin
                        </Link>
                        , or shoot me an <Link to="/contact">email</Link>.
                    </Paragraph>
                </Container>
            </PageCenter>
            <Footer />
        </div>
    );
};

// --------------------------
// Container to fix the width
// --------------------------
const Container = styled.div`
    width: 700px;
    line-height: 1.5;

    @media (max-width: ${Sizes.mediumScreen}) {
        width: 100%;
        padding: ${Sizes.largeSpace};
    }

    @media (max-width: ${Sizes.smallScreen}) {
        width: 100%;
        padding: ${Sizes.mediumSpace};
    }
`;

// ----------------------------------
// Make text look like a code comment
// ----------------------------------
const Comment = styled.span`
    color: grey;
`;

// --------------------
// Links to other pages
// --------------------
const Link = styled(GatsbyLink)`
    color: black;
`;

export default IndexPage;
