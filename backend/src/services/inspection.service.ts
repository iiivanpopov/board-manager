import ApiError from '@/exceptions/api-error'
import type { BoardInspection, PrismaClient } from '@prisma/client'

class InspectionService {
	prisma: PrismaClient
	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}
	async saveInspectionRecord(
		data: Omit<BoardInspection, 'id' | 'createdAt'>,
		quantity: number
	): Promise<{ quantity: number; inspections: BoardInspection[] }> {
		const inspections: BoardInspection[] = []

		for (let i = 0; i < quantity; i++) {
			const inspection = await this.prisma.boardInspection.create({
				data,
			})
			inspections.push(inspection)
		}

		return { quantity, inspections }
	}

	async deleteInspectionRecord(id: number): Promise<BoardInspection> {
		const inspection = await this.prisma.boardInspection.findUnique({
			where: { id },
		})

		if (!inspection) throw ApiError.NotFound('Inspection record not found.')

		await this.prisma.boardInspection.delete({
			where: { id },
		})
		return inspection
	}
}

export default InspectionService
