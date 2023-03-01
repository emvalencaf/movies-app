// controller
import ControllerMovies from "../api/controllers/movies";

// templates
import HomeTemplate from "../templates/Home";

// types
import { GetServerSideProps } from "next/types";
import { FetchMovies } from "../shared-types/fetchMovies";

export default function Index({ results, total_pages, page }: FetchMovies) {
	return (
		<HomeTemplate
			topMovies={results}
			currentPage={page}
			totalPages={total_pages}
		/>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { page: currentPage = 1 } = ctx.query;
	const response = await ControllerMovies.getTopMovies(currentPage);
	const { results, total_pages, page } = response;
	return {
		props: {
			results,
			total_pages,
			page,
		},
	};
};
