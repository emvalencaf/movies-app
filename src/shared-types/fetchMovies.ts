export type FetchMovies = {
	results: Movie[];
	page: number;
	total_pages: number;
};

export type Movie = {
	id: string;
	title: string;
	vote_average: string;
	poster_path: string;
	budget: string | number;
	revenue: string | number;
	runtime: string | number;
	genres: Genre[];
	spoken_languages: Language[];
	overview: string;
	tagline: string;
	production_countries: ProductionCountry[];
	production_companies: ProductionCompany[];
};

export type MoviePageProps = {
	movie: Movie;
};

type Genre = {
	id: string;
	name: string;
};

type ProductionCountry = {
	iso_3166_1: string;
	name: string;
};

type ProductionCompany = {
	id: string;
	logo_path: string;
	origin_country: string;
	name: string;
};

type Language = {
	iso_639_1: string | number;
	english_name: string;
};
