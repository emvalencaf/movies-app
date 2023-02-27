// utils
import CreateFetch from "../../../utils/createFetch";

export default class ServiceMovies{
	static async getMovies(url: string){
		const options = {
			method: "GET",
		};
		return await CreateFetch.dispatch(url, options);
	}
}