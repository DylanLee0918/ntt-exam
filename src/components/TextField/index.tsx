import { TextField as MuiTextField } from "@material-ui/core";
import styled from "styled-components";

const TextField = styled(MuiTextField)`
    &.MuiTextField-root > div {
        height: 50px;
	    width: 100%;
	    font-size: 1rem;
	    font-weight: 500;
        color: #25396F;
        background-color: #EBF3FF;
        border: 2px solid #EBF3FF;
        border-radius: 0.5rem;
	    outline: none;
	    padding: 1rem;
	    z-index: 1;

        &:hover {
            border: 2px solid #DDE9FC;
            transition: all 0.3s ease-in-out;
        }

        &:after,
	    &:before {
	    	display: none;
	    }
    }
`;

export default TextField;
