import styled from "styled-components";
import Sizes from "../styles/sizes";

// ----------------
// Simple paragraph
// ----------------
const Paragraph = styled.p`
    padding-top: ${Sizes.largeSpace};
    font-size: ${Sizes.largeText};

    @media (max-width: ${Sizes.mediumScreen}) {
        padding-top: ${Sizes.mediumSpace};
        font-size: ${Sizes.mediumText};
    }

    @media (max-width: ${Sizes.smallScreen}) {
        padding-top: ${Sizes.smallSpace};
        font-size: ${Sizes.smallText};
    }
`;

export default Paragraph;
