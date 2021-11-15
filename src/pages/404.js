import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import "../styles/global.css";
import { Helmet } from "react-helmet";

/* Simplify links */
const Link = styled(GatsbyLink)`
    color: black;
    align-self: center;
`;

// markup
const NotFoundPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lucas Nunn - 404</title>
            </Helmet>
            <Link to="/">Home</Link>
        </div>
    );
};

export default NotFoundPage;
