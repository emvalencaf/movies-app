import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.medium};
	`}
`;
