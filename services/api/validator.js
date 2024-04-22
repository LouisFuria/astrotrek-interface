/** Services */
import { useServerURL } from "@/services/config"

export const fetchValidators = async ({ limit, offset, sort = "desc" }) => {
	try {
		const url = new URL(`${useServerURL()}/validators`)

		if (limit) url.searchParams.append("limit", limit)
		if (offset) url.searchParams.append("offset", offset)

		url.searchParams.append("sort", sort)

		const data = await useFetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const fetchValidatorById = async (id) => {
	try {
		const url = new URL(`${useServerURL()}/validators/${id}`)

		const data = await useFetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const fetchValidatorBlocks = async ({id, limit, offset, sort}) => {
	try {
		const url = new URL(`${useServerURL()}/validators/${id}/blocks`)

        if (limit) url.searchParams.append("limit", limit)
		if (offset) url.searchParams.append("offset", offset)
		if (sort) url.searchParams.append("sort", sort)

		const data = await useFetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const fetchValidatorUptime = async ({id, limit}) => {
	try {
		const url = new URL(`${useServerURL()}/validators/${id}/uptime`)

        if (limit) url.searchParams.append("limit", limit)

		const data = await useFetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}
