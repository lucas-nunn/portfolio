import styled from "styled-components";
import Sizes from "../styles/sizes";
import "../styles/global.css";

// -------------
// Title message
// -------------
const Title = styled.h1`
    font-size: ${Sizes.xxlText};
    font-weight: bold;

    @media (max-width: ${Sizes.mediumScreen}) {
        font-size: ${Sizes.xlText};
    }

    @media (max-width: ${Sizes.smallScreen}) {
        font-size: ${Sizes.largeText};
    }
`;

export default Title;
