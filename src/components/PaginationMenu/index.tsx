// hooks
import { useEffect, useState } from 'react';
import PaginationFormat from '../../utils/pagination';
import PageLink, { PageLinkProps } from '../PageLink';

// styles
import * as Styled from './styles';

// icon
import { ArrowCircleLeft, ArrowCircleRight } from "@styled-icons/material-outlined"
import { useGetPagination } from '../../hooks/useGetPagination';


// types
export type PaginationMenuProps = {
	currentPage: number;
	totalPages: number;
	query: string | string[];
};

const PaginationMenu = ({ currentPage, totalPages, query }: PaginationMenuProps) => {
	const [pageLinks, setPageLinks] = useState<PageLinkProps[]>([]);
	/*
	const { nrEnd, nrStart } = useGetPagination(currentPage, totalPages);
	console.log("nrEnd", nrEnd);
	console.log("nrStart", nrStart);
	// effect
	useEffect(() => {
		handleSetPagination(nrStart, nrEnd, currentPage, totalPages, query);

		return () => {
			setPageLinks(() => []);
		}
	}, [nrStart, nrEnd, currentPage, totalPages, query]);*/

	// effect
	useEffect(() => {
		const pagination = () => {

			const {
				nrStart,
				nrEnd
			} = PaginationFormat.getNavegation(currentPage, totalPages);

			handleSetPagination(nrStart, nrEnd, currentPage, totalPages, query);
		};

		pagination();
		return () => {
			setPageLinks((s) => []);
		}
	}, [currentPage, totalPages, query]);


	// handle pagination
	const handleSetPagination = (nrStart: number, nrEnd: number, currentPage: number, totalPages: number, query: string | string[]) => {
		if (currentPage > 1) {
			setPageLinks((s) => [...s, {
				link: `${query ?
					`?q=${query}&`
					: `?`
					}page=${currentPage - 1}`,
				icon: <ArrowCircleLeft />,
				children: "<",
				showOnlyIcon: true,
			}])

		}

		const arr: PageLinkProps[] = [];

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
			setPageLinks((s) => ([...s, {
				link: `${query ?
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
		<Styled.Wrapper>

			<Styled.Ul>
				{
					pageLinks.length >= 1 && pageLinks.map((pageLink, index) => (
						<PageLink key={index} link={pageLink.link} showOnlyIcon={pageLink.showOnlyIcon} icon={pageLink.icon} active={pageLink.active}>
							{pageLink.children}
						</PageLink>
					))
				}
			</Styled.Ul>
		</Styled.Wrapper>
	);
};

export default PaginationMenu;
