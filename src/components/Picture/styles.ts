import styled, { css } from "styled-components";

export const Picture = styled.picture`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
	`}
`;

export const Image = styled.img`
	${({ theme }) => css`
		height: ${theme.frameSizes.medium};
		width: ${theme.frameSizes.small};
	`}
`;
