import styled, { css } from "styled-components";

export const Nav = styled.nav`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
	`}
`;

export const Ul = styled.ul`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		list-style: none;
	`}
`;
