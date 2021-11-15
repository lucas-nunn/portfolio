import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import TitleBar from "./titleBar";
import Sizes from "../styles/sizes";
import "../styles/global.css";

// ------------------------------------------
// Project card: a card showing off a project
// ------------------------------------------
const ProjectCard = (props) => {
    /*
     * Prevent clicking link from triggering entire card click
     */
    const handle = (e) => {
        e.stopPropagation();
    };

    return (
        <Container>
            <PaddedTitleBar>
                <Title>{props.name}</Title>
                {props.url !== "" && (
                    <Title as="a" href={props.url} onClick={handle}>
                        <AiOutlineGithub color="black" />
                    </Title>
                )}
            </PaddedTitleBar>
            {props.pic}
            <Description>{props.description}</Description>
        </Container>
    );
};

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    pic: PropTypes.any.isRequired,
    description: PropTypes.string.isRequired,
};

// ------------------------------
// Container of the card contents
// ------------------------------
const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    width: ${Sizes.mediumElement};
    transition: box-shadow 0.2s, transform 0.2s;

    &:hover {
        box-shadow: -5px 5px black;
        transform: translate(5px, -5px);
    }

    @media (max-width: ${Sizes.mediumScreen}) {
        width: 100%;
    }
`;

// --------------------------------
// Add padding to tilebar container
// --------------------------------
const PaddedTitleBar = styled(TitleBar)`
    padding: ${Sizes.mediumSpace};
    border-bottom: 1px solid grey;

    @media (max-width: ${Sizes.mediumScreen}) {
        padding: ${Sizes.smallSpace};
    }
`;

// --------------------
// Title of the project
// --------------------
const Title = styled.h1`
    font-size: ${Sizes.xText};
    font-weight: bold;

    @media (max-width: ${Sizes.mediumScreen}) {
        font-size: ${Sizes.largeText};
    }

    @media (max-width: ${Sizes.smallScreen}) {
        font-size: ${Sizes.mediumText};
    }
`;

// --------------------------
// Description of the project
// --------------------------
const Description = styled.p`
    font-size: ${Sizes.mediumText};
    padding: ${Sizes.mediumSpace};
    border-top: 1px solid grey;

    @media (max-width: ${Sizes.mediumScreen}) {
        font-size: ${Sizes.regularText};
        padding: ${Sizes.smallSpace};
    }

    @media (max-width: ${Sizes.smallScreen}) {
        font-size: ${Sizes.smallText};
    }
`;

export default ProjectCard;
