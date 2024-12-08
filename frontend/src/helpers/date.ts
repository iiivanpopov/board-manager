export const getWeekNumber = (date: Date): number => {
	const currentDay = Math.ceil(
		(date.getTime() - new Date(date.getFullYear(), 0, 1).getTime()) /
			(1000 * 24 * 60 * 60)
	)

	return Math.trunc((currentDay - 1) / 7 + 1)
}

export const formatDate = (date: Date): string => {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const day = date.getDate().toString().padStart(2, '0')
	return `${year}-${month}-${day}`
}

// git pull
// docker-compose build

// docker-compose up
