import path from 'path'

export const readFileContent = async (filePath: string): Promise<string> => {
	try {
		const file = Bun.file(path.join(__dirname, '../../data', filePath))
		const text = await file.text()
		return text
	} catch (error) {
		console.error('Error reading file:', filePath, error)
		throw new Error(`Failed to read file: ${filePath}`)
	}
}

export const readFileLines = async (filePath: string): Promise<string[]> => {
	try {
		const text = await readFileContent(filePath)
		return text.split('\n').filter(line => line.trim() !== '')
	} catch (error) {
		console.error('Error reading file lines:', filePath, error)
		throw new Error(`Failed to read file lines: ${filePath}`)
	}
}
