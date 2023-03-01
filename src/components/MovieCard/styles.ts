import styled, { css } from "styled-components";
import { Achor } from "../Achor/styles";
import { Title } from "../Heading/styles";
import { Picture } from "../Picture/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background-color: ${theme.colors.quaternary};
		max-width: ${theme.frameSizes.smallMedium};
		height: ${theme.frameSizes.large};
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

		& ${Achor} {
			border: 1px solid;
			padding: ${theme.spacings.small};
			border-radius: ${theme.spacings.small};
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
		color: ${theme.colors.secondary};

		> svg {
			color: ${theme.colors.tertiary};
			height: ${theme.fonts.sizes.normal};
			width: ${theme.fonts.sizes.normal};
		}

		&:hover {
			filter: brightness(220%);

			> svg {
				color: ${theme.colors.senary};
			}
		}
	`}
`;
