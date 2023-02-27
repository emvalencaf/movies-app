// utils
import CreateFetch from "../../../utils/createFetch";

export default class ServiceMovies{
	static async getMovies<T>(url: string, signal: AbortSignal): Promise<T>{
		const options = {
			method: "GET",
			signal
		};
		return await CreateFetch.dispatch(url, options);
	}
}