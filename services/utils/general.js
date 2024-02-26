export const formatBytes = (bytes, decimals = 2) => {
	if (!+bytes) return "0 Byte"

	const dm = decimals < 0 ? 0 : decimals
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"]

	const i = Math.floor(Math.log(bytes) / Math.log(1024))

	return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(dm))} ${sizes[i]}`
}

export const numToPercent = (num) => {
	return (num * 100).toFixed(0) + "%"
}

export const strToHex = (str) => {
	let hex = ""
	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i)
		const hexValue = charCode.toString(16)

		hex += hexValue.padStart(2, "0")
	}
	return hex
}

export const shortHex = (hex) => {
	if (hex.length > 16) {
		return `${hex.slice(0, 8)} ••• ${hex.slice(-8)}`
	} else {
		return hex
	}
}

export const shortHash = (hash) => {
	if (hash.length > 16) {
		return `${hash.slice(0, 8)} ••• ${hash.slice(-8)}`
	} else {
		return hash
	}
}

export const splitAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
}

export const getNetworkName = () => {
	const { hostname } = useRequestURL()

	switch (hostname) {
		case "celenium.io":
			return "Mainnet"

        case "dev.celenium.io":
			return "Development"

		case "localhost":
			return "Local"

		default:
			return "Unknown"
	}
}

export function reverseMapping(obj) {
	const reversedObj = {}
	Object.entries(obj).forEach(([key, value]) => {
		reversedObj[value] = key
	})
	return reversedObj
}
