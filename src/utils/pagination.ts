export default class PaginationFormat{
	static getNavegation (currentPage: number, totalPages: number) {
		// limit of pages
		let pageLimit: number = 5;

		// first node and last node
		let nrStart: number = 0;
		let nrEnd: number = 0;

		// set navegation
		if (totalPages < pageLimit) pageLimit = totalPages - currentPage;

		if (currentPage - parseInt((pageLimit / 2).toString()) < 1) {
			// set first page
			nrStart = 1;
			nrEnd = pageLimit;

		} else if (currentPage - parseInt((pageLimit / 2).toString()) > totalPages) {
			// set last pages
			nrStart = totalPages - pageLimit;
			nrEnd = totalPages;
		} else {
			//set middle page
			nrStart = currentPage - parseInt((pageLimit / 2).toString());
			nrEnd = currentPage + parseInt((pageLimit / 2).toString());
		}

		return {
			nrStart,
			nrEnd,
		};
	}
}