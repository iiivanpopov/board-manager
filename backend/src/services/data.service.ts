import { readFileLines } from '@/utils/files'

const INSPECTORS = 'inspectors.txt'
const DEFECT_TYPES = 'defect_types.txt'
const DEFECTS = 'defects.txt'
const PRODUCTS = 'products.txt'

class DataService {
	async fetchData(): Promise<{
		inspectors: string[]
		defectTypes: string[]
		defects: string[]
		products: string[]
	}> {
		const data = await Promise.all([
			await readFileLines(INSPECTORS),
			await readFileLines(DEFECT_TYPES),
			await readFileLines(DEFECTS),
			await readFileLines(PRODUCTS),
		])

		return {
			inspectors: data[0],
			defectTypes: data[1],
			defects: data[2],
			products: data[3],
		}
	}
}

export default DataService
