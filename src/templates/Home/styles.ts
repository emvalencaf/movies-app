import styled, { css } from 'styled-components';
import { Title } from '../../components/Heading/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.primary};
		max-height: 100%;

		& ${Title} {
			text-align: center;
		}
	`}
`;
