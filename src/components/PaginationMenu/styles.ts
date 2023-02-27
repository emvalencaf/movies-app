import styled, { css } from 'styled-components';

export const Ul = styled.ul`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.tiny};
		list-style: none;
		background-color: aliceblue;
	`}
`;
