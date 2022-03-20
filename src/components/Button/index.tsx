import { Button as MuiButton } from "@material-ui/core";
import styled from "styled-components";

const Button = styled(MuiButton)`
    &.MuiButton-root {
        height: 45px;
		font-size: 1rem;
		min-width: 100px;
        border-radius: 0.5rem;
        color: #FFF;
        background-color: #3787FF;
        &:hover {
            cursor: pointer;
            background-color: #5D9DFF;
            color: #FFF;
            transition: all 0.2s ease-in-out;
        }
    }
`;

export default Button;

