import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Picture } from '../Picture/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: ${theme.colors.quaternary};
		max-width: ${theme.frameSizes.smallMedium};
		max-height: ${theme.frameSizes.largeMedium};
		height: ${theme.frameSizes.largeMedium};
		padding: ${theme.spacings.small};
		border-radius: ${theme.spacings.small} 0px ${theme.spacings.small};
		gap: ${theme.spacings.mediumSmall};

		& ${Title} {
			text-align: center;
			margin: 0px;
			padding: 0px;
		}

		& ${Picture} {
			max-width: ${theme.frameSizes.small};

			> img {
				height: 100%;
				width: 100%;
			}
		}

	`}
`;

export const ContainerRating = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.tiny};
		width: 100%;


		> svg {
			color: ${theme.colors.tertiary};
			height: ${theme.fonts.sizes.normal};
			width: ${theme.fonts.sizes.normal};
		}
	`}
`;