import styled, { css } from "styled-components";
import { Title } from "../../components/Heading/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.mediumLarge};
		background-color: ${theme.colors.primary};
		& p {
			text-align: justify;
		}
	`}
`;

export const TaglineContainer = styled.div`
	${({ theme }) => css`
		position: relative;
		color: ${theme.colors.secondary};
		border-radius: 10px 5px 10px;
		padding: ${theme.spacings.large};
		border: 1px solid ${theme.colors.tertiary};
		box-shadow: 0px 0px 20px ${theme.colors.senary};

		> svg {
			position: absolute;
			color: ${theme.colors.tertiary};
			height: ${theme.spacings.mediumLarge};
			width: ${theme.spacings.mediumLarge};
			filter: brightness(220%)
				drop-shadow(0px 0px 2px ${theme.colors.senary});
		}
		> svg:first-child {
			top: -10px;
			left: -10px;
			transform: rotate(180deg);
		}
		> svg:last-child {
			bottom: -10px;
			right: -10px;
		}
	`}
`;

export const ContainerDetails = styled.div`
	${({ theme }) => css`
		width: 100%;
		max-width: 900px;
		padding: ${theme.spacings.hero};
		color: ${theme.colors.secondary};
		font-size: ${theme.fonts.sizes.normal};
		background-color: ${theme.colors.quaternary};
		border-radius: 20px 0px 20px;
		& ${Title} {
			text-align: justify;
			display: flex;
			margin: 0px;
			padding: 0px;
			gap: ${theme.spacings.mediumSmall};

			> svg {
				width: ${theme.fonts.sizes.medium};
				height: ${theme.fonts.sizes.medium};
				transition: all ${theme.transitions.slow} ease-in-out;
			}

			> svg:hover {
				color: ${theme.colors.tertiary};
				transform: scale(1.4);
				filter: brightness(220%);
			}
		}
	`}
`;

export const Ul = styled.ul`
	${({ theme }) => css`
		list-style-type: none;
		display: flex;
		margin: ${theme.spacings.medium};
		padding: 0px;
		gap: ${theme.spacings.tiny};
	`}
`;

export const Item = styled.li`
	${() => css`
		display: flex;
		align-items: center;
		justify-content: center;
		&::after {
			content: ", ";
		}
		&:last-child::after {
			content: ".";
		}
	`}
`;
