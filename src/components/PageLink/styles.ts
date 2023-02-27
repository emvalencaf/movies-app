import styled, { css } from 'styled-components';

export const ListItem = styled.li`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: ${theme.spacings.mediumSmall};
		height: ${theme.spacings.mediumSmall};
		padding: ${theme.spacings.small};
		list-style-type: none;
		border-radius: 100%;
		background-color: ${theme.colors.primary};
	`}
`;