// hooks
import { useEffect, useState } from 'react';
import PaginationFormat from '../../utils/pagination';
import PageLink, { PageLinkProps } from '../PageLink';

// styles
import * as Styled from './styles';

// icon
import { ArrowCircleLeft, ArrowCircleRight } from "@styled-icons/material-outlined"


// types
export type PaginationMenuProps = {
	currentPage: number;
	totalPages: number;
	query: string;
};

const PaginationMenu = ({ currentPage, totalPages, query }: PaginationMenuProps) => {
	const [pageLinks, setPageLinks] = useState<PageLinkProps[]>([]);

	// effect
	useEffect(() => {
		const pagination = () => {

			const {
				nrStart,
				nrEnd
			} = PaginationFormat.getNavegation(currentPage, totalPages);

			handleSetPagination(nrStart, nrEnd, currentPage, query);
		};

		pagination();
		return () => {
			setPageLinks((s) => []);
		}
	}, [currentPage, totalPages, query]);


	// handle pagination
	const handleSetPagination = (nrStart: number, nrEnd: number, currentPage: number, query: string) => {
		if (currentPage > 1) {
			setPageLinks((s) => [...s, {
				link: `${query ?
					`?q=${query}`
					: `?`
					}page=${currentPage - 1}`,
				icon: <ArrowCircleLeft />,
				children: "<",
				showOnlyIcon: true,
			}])

		}

		const arr:PageLinkProps[] = [];

		for (let i = nrStart; i <= nrEnd; i++) {
			let active: boolean = currentPage === i ? true : false;
			arr.push({
				link: `${query ?
					`?q=${query}&`
					: `?`
					}page=${i}`,
				children: i,
				showOnlyIcon: false,
				active,
			});
		}

		setPageLinks((s) => ([...s, ...arr]));

		if (currentPage < totalPages) {
			setPageLinks((s) => ([...s,{
				link:`${query ?
					`?q=${query}&`
					: `?`
				}page=${currentPage + 1}`,
				children: ">",
				icon: <ArrowCircleRight />,
				showOnlyIcon: true,
			}]));

		}
	}

	return (
		<Styled.Ul>
			{
				pageLinks.length >= 1 && pageLinks.map((pageLink, index) => (
					<PageLink key={index} link={pageLink.link} showOnlyIcon={pageLink.showOnlyIcon} icon={pageLink.icon} active={pageLink.active}>
						{pageLink.children}
					</PageLink>
				))
			}
		</Styled.Ul>
	);
};

export default PaginationMenu;
