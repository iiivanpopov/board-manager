declare global {
	interface Date {
		getWeek(): number
	}
}

Date.prototype.getWeek = function (): number {
	let date = new Date(this.getTime())
	date.setHours(0, 0, 0, 0)
	date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7))
	let week1 = new Date(date.getFullYear(), 0, 4)
	const daysBetween = (date.getTime() - week1.getTime()) / 86400000
	const adjustedDays = daysBetween - 3 + ((week1.getDay() + 6) % 7)
	return Math.round(adjustedDays / 7)
}

export const formatDate = (date: Date): string => {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const day = date.getDate().toString().padStart(2, '0')
	return `${year}-${month}-${day}`
}
