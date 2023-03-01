// controller
import ControllerMovies from "../../api/controllers/movies";

// templates
import SearchTemplate from "../../templates/Search";

// types
import { GetServerSideProps } from "next/types";
import { FetchMovies } from "../../shared-types/fetchMovies";

export default function SearchPage({
	results,
	total_pages,
	page,
	q,
}: FetchMovies & { q: string | string[] }) {
	return (
		<SearchTemplate
			movies={results}
			totalPages={total_pages}
			currentPage={page}
			query={q}
		/>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { page: currentPage = 1, q } = ctx.query;
	const response = await ControllerMovies.getSearchedMovies(q, currentPage);
	const { results, total_pages, page } = response;

	return {
		props: {
			results,
			total_pages,
			page,
			q,
		},
	};
};
