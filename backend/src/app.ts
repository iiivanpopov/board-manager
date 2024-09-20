import router from '@routes/routes'
import prisma from '@utils/prisma'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import errorMiddleware from './middleware/error.middleware'

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT || 2999

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.use(errorMiddleware)

// IIFE start function
;(async () => {
	await prisma.$connect()
	app.listen(port, () => {
		console.log(`HTTP server is running on localhost:${port}`)
	})
})()

process.on('SIGINT', async () => {
	await prisma.$disconnect()
	process.exit(0)
})
