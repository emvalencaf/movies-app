// utils
import CreateFetch from "../../../utils/createFetch";

export default class ServiceMovies {
	static async getMovies<T>(url: string): Promise<T> {
		const options = {
			method: "GET",
		};

		return await CreateFetch.dispatch(url, options);
	}
}
