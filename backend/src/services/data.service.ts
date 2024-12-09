import { readFileLines } from '@/utils/files'

const DEFECT_TYPES = 'defect_types.txt'
const DEFECTS = 'defects.txt'
const PRODUCTS = 'products.txt'

class DataService {
	async fetchData(): Promise<{
		defectTypes: string[]
		defects: string[]
		products: string[]
	}> {
		const data = await Promise.all([
			await readFileLines(DEFECT_TYPES),
			await readFileLines(DEFECTS),
			await readFileLines(PRODUCTS),
		])

		return {
			defectTypes: data[0],
			defects: data[1],
			products: data[2],
		}
	}
}

export default DataService
