export const workerGuard = (worker: number) => !(worker == 1 || worker == 2)
export const hasEmptyField = (obj: any) =>
	Object.values(obj).some(
		value => value === null || value === undefined || value === ''
	)
