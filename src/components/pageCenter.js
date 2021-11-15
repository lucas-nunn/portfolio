import styled from "styled-components";
import Center from "./center";
import "../styles/global.css";

// ------------------------------------------
// Center the content within a page sized box
// ------------------------------------------
const PageCenter = styled(Center)`
    min-height: 100vh;
`;

export default PageCenter;
