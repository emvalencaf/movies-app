import styled, { css } from 'styled-components';
import { Achor } from '../Achor/styles';

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
		background-color: ${theme.colors.quaternary};
		gap: ${theme.spacings.mediumSmall}
	`}
`;
