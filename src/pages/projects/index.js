import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import Footer from "../../components/footer";
import ProjectCard from "../../components/projectCard";
import Title from "../../components/title";
import PageCenter from "../../components/pageCenter";
import Sizes from "../../styles/sizes";
import "../../styles/global.css";

// -----------------------------------------------
// Projects: page showing off my personal projects
// -----------------------------------------------
const Projects = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lucas Nunn - Projects</title>
            </Helmet>
            <PageCenter>
                <Container>
                    <Title>Projects</Title>
                    <Grid>
                        {projectsData.projects.map((project) => {
                            return (
                                <CardClick
                                    onClick={() => {
                                        navigate(`/projects/${project.route}`);
                                    }}
                                    key={project.name}
                                >
                                    <ProjectCard
                                        name={project.name}
                                        description={project.shortDescription}
                                        pic={project.pic}
                                        url={project.url}
                                    />
                                </CardClick>
                            );
                        })}
                    </Grid>
                </Container>
            </PageCenter>
            <Footer />
        </div>
    );
};

const Container = styled.div`
    width: ${Sizes.largeElement};

    @media (max-width: ${Sizes.largeScreen}) {
        width: ${Sizes.mediumElement};
        padding: ${Sizes.largeSpace};
    }

    @media (max-width: ${Sizes.mediumScreen}) {
        padding: ${Sizes.largeSpace} ${Sizes.mediumSpace};
    }

    @media (max-width: ${Sizes.smallScreen}) {
        padding: ${Sizes.largeSpace} ${Sizes.smallSpace};
    }
`;

// ---------------------
// Align cards in a grid
// ---------------------
const Grid = styled.div`
    padding-top: ${Sizes.largeSpace};

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${Sizes.largeSpace};

    @media (max-width: ${Sizes.largeScreen}) {
        grid-template-columns: 1fr;
    }

    @media (max-width: ${Sizes.mediumScreen}) {
        padding-top: ${Sizes.mediumSpace};
    }
`;

// -----------------------
// Make the card clickable
// -----------------------
const CardClick = styled.a`
    cursor: pointer;
`;

// -------------
// Projects data
// -------------
const projectsData = {
    projects: [
        {
            name: "Wikiclick",
            shortDescription:
                "A Firefox/Chrome extension to quickly provide Wikipedia summaries while you browse the web",
            pic: (
                <StaticImage src="../../images/wikiclick/wikiclick-popup.png" />
            ),
            url: "https://github.com/lucnunn/wikiclick",
            route: "wikiclick",
        },
        {
            name: "Exhale",
            shortDescription:
                "A MEAN-stack web app for practicing, creating, and sharing breathing exercises",
            pic: <StaticImage src="../../images/exhale/code.png" />,
            url: "https://github.com/lucnunn/exhale",
            route: "exhale",
        },
    ],
};

export default Projects;
