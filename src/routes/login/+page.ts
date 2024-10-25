import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url }) => {
	return {
		message: url.searchParams.get('message'),
		positive: url.searchParams.get('positive') ?? false,
	}
}