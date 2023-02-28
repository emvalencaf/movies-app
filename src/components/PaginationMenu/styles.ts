import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.primary};
		margin: 0px;
		padding: ${theme.spacings.mediumLarge};
	`}
`;

export const Ul = styled.ul`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.tiny};
		list-style: none;
		margin: 0px;
		border-radius: ${theme.spacings.small};
		padding: ${theme.spacings.small};
		background-color: ${theme.colors.secondary};
	`}
`;
