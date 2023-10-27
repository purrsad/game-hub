import axios from "axios";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

export default axios.create({
	baseURL: "https://api.rawg.io/api/",
	params: {
		key: "fe837a76686f4976a02f88eea1f9f0e0",
	},
});
