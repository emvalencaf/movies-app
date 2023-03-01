import styled, { css } from "styled-components";
import { Picture } from "../Picture/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqLarge} {
			grid-template-columns: repeat(2, ${theme.frameSizes.smallMedium});
		}
		@media ${theme.media.lteOrEqMedium} {
			grid-template-columns: auto;
		}
		display: grid;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.huge};
		grid-template-columns: repeat(4, ${theme.frameSizes.smallMedium});
		background-color: ${theme.colors.primary};
		padding: ${theme.spacings.small};
	`}
`;
