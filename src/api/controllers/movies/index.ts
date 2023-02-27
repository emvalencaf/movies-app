// service
import ServiceMovies from "../../services/movies";

export default class ControllerMovies {
	static async getTopMovies(pageNumber: number | string) {
		let url: string = `${process.env.NEXT_PUBLIC_API}/top_rated?${process.env.NEXT_PUBLIC_API_KEY}`;

		// check if was requested a pagination
		if (pageNumber) url = `${url}&page=${pageNumber}`;

		try {
			return await ServiceMovies.getMovies(url);
		} catch (err) {
			console.log(err);
		}

	}
	static async getMovie(id:string) {

		try {

			if (id) throw new Error("must inform an id");

			const url = `${process.env.NEXT_PUBLIC_API}/${id}?${process.env.NEXT_PUBLIC_API_KEY}`;

			return await ServiceMovies.getMovies(url);

		} catch (err) {
			console.log(err);
		}
	}
}