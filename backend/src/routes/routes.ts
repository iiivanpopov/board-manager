import DataController from '@controllers/data.controller'
import InspectionController from '@controllers/inspection.controller'
import InventoryController from '@controllers/inventory.controller'
import DataService from '@services/data.service'
import InspectionService from '@services/inspection.service'
import InventoryService from '@services/inventory.service'
import prisma from '@utils/prisma'
import { Router } from 'express'

const inspectionService = new InspectionService(prisma)
const inventoryService = new InventoryService(prisma)
const dataService = new DataService()

const inspectionController = new InspectionController(inspectionService)
const inventoryController = new InventoryController(inventoryService)
const dataController = new DataController(dataService)

const router = Router()

router.post('/inspection/:worker', inspectionController.saveInspectionRecord)
router.delete('/inspection/:id', inspectionController.deleteInspectionRecord)

router.post('/inventory/:worker', inventoryController.saveInventoryRecord)
router.delete('/inventory/:id', inventoryController.deleteInventoryRecord)

router.get('/data', dataController.fetchData)

export default router
