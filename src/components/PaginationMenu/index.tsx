// hooks
import { useState } from 'react';
import PageLink from '../PageLink';

// styles
import * as Styled from './styles';

// types
export type PaginationMenuProps = {
	currentPage: string | number;
	totalPages: string | number;
	query: string;
};

const PaginationMenu = ({ currentPage, totalPages, query }: PaginationMenuProps) => {
	const [ pageLinks, setPageLinks ] = useState([]);

	

	return (
		<Styled.Ul>
			{
				pageLinks.length >= 1 && pageLinks.map((pageLink, index) => (
					<PageLink link={pageLink}>
						{index}
					</PageLink>
				))
			}
		</Styled.Ul>
	);
};

export default PaginationMenu;
