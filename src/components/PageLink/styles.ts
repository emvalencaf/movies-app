import styled, { css, DefaultTheme } from 'styled-components';
import { Achor } from '../Achor/styles';

type ListItemProps = {
	theme: DefaultTheme;
	active: boolean;
	showOnlyIcon: boolean;
}

const activeList = (theme:DefaultTheme) => css`
	background-color: ${theme.colors.tertiary};
`;

export const ListItem = styled.li<ListItemProps>`
	${({ theme, showOnlyIcon, active }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: ${theme.spacings.mediumLarge};
		height: ${theme.spacings.mediumLarge};
		padding: ${theme.spacings.small};
		list-style-type: none;
		border-radius: 100%;
		background-color: ${theme.colors.primary};

		& ${Achor} {
			> span {
				display: ${showOnlyIcon? "none": "inline"};
			}
		}

		${active && activeList(theme)}
	`}
`;