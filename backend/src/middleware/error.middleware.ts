import ApiError from '@/exceptions/api-error'
import type { NextFunction, Request, Response } from 'express'

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
	console.log(err)
	if (err instanceof ApiError) {
		res.status(err.status).json({ message: err.message, errors: err.errors })
		return
	}
	res.status(500).json({ message: 'Unexpected error' })
}
