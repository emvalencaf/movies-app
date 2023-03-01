import styled, { css } from "styled-components";
import { Button } from "../Button/styles";
import { Form } from "../Form/styles";
import { Input, Wrapper as WrapperInput } from "../TextInput/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		& ${Form} {
			flex-direction: row;
			align-items: center;
			justify-items: center;
			gap: 0px;
			padding: 0px;
			background-color: transparent;
			> ${Button} {
				font-size: ${theme.fonts.sizes.small};
				padding: 0px;
				height: 54px;
				max-height: 54px;
				border-radius: 0px 20px 20px 0px;
				> span {
					display: none;
				}
			}

			> ${Input} {
				justify-self: center;
				align-self: center;
			}
			> ${WrapperInput} {
				margin: 0px;
			}
		}
	`}
`;
