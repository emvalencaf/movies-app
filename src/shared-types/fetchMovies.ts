export type FetchMovies = {
	results: Movie[];
	page: number;
	total_pages: number;
}

export type Movie = {
	id: string;
	title: string;
	vote_average: string;
	poster_path: string;
	budget: string | number;
	revenue: string | number;
	runtime: string | number;
	genre: Genre[];
	spoken_language: Language[];
	overview: string;
	tagline: string;
};

export type MoviePageProps = {
	movie: Movie;
};

type Genre = {
	id: string;
	name: string;
}

type Language = {
	iso_639_1: string | number;
	english_name: string;
}