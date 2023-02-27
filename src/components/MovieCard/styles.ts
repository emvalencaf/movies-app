import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css``}
`;

export const ContainerRating = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.tiny};
		width: 100%;
	`}
`;