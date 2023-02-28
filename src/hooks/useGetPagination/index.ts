import { useEffect, useState } from "react";

export const useGetPagination = (currentPage: number, totalPages: number) => {
		// states
		const [pageLimit, setPageLimit] = useState<number>(5);
		const [nrStart, setNrStart] = useState<number>(currentPage);
		const [nrEnd, setNrEnd] = useState<number>(0);

		// effect
		useEffect(() => {

			if (totalPages < pageLimit) setPageLimit(() => totalPages - currentPage);

			if (currentPage - parseInt((pageLimit / 2).toString()) < 1) {
				// set fisrtPage
				setNrStart(() => 1);
				setNrEnd(() => pageLimit);

			} else if (currentPage - parseInt((pageLimit / 2).toString()) < totalPages) {

				// set last pages
				setNrStart(() => totalPages - pageLimit);
				setNrEnd(() => totalPages);

			} else {

				//set middle page
				setNrStart(() => currentPage - parseInt((pageLimit / 2).toString()));
				setNrEnd(() => currentPage + parseInt((pageLimit / 2).toString()));

			}
			return () => {
				setNrEnd(() => 0);
				setNrStart(() => 0);
				setPageLimit(() => 5);
			}
		}, [currentPage, totalPages]);

		return {
			nrStart,
			nrEnd,
		};
};