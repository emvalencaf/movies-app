import styled, { css } from "styled-components";
import { Achor } from "../Achor/styles";

export const Header = styled.header`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqSmall} {
			& ${Achor} {
				> span {
					display: none;
				}
			}
		}
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: ${theme.colors.quaternary};
		gap: ${theme.spacings.mediumSmall};
	`}
`;
