import type { FC, PropsWithChildren } from 'react'

export type setter<T = string> = (value: T) => void

export type onClick = () => void

export interface SelectOptionsType {
	inspectors: string[]
	defectTypes: string[]
	defects: string[]
	products: string[]
}

export interface UseInspectionPayload {
	date: Date
	inspector: string
	product: string
	defectType: string
	defect: string
	worker: string
	inspectionId: string
}

export interface UseInventoryPayload {
	date: Date
	quantity: string
	product: string
	worker: string
	inventoryId: string
}

interface ButtonProps {
	className?: string
	disabled?: boolean
	onClick: onClick
}
export type ButtonType = FC<PropsWithChildren<ButtonProps>>

interface DateInputProps {
	date: Date
	setDate: setter<Date>
}
export type DateInputType = FC<DateInputProps>

interface DropdownProps {
	label: string
	value: string
	options: string[]
	setter: setter
	placeholder?: string
}
export type DropdownType = FC<DropdownProps>

interface TextInputProps {
	label: string
	value: string
	setter: setter
	placeholder?: string
}
export type TextInputType = FC<TextInputProps>

interface InspectionFormProps {
	worker: string
	options: SelectOptionsType | null
	setStatusCode: setter
}
export type InspectionFormType = FC<InspectionFormProps>

interface InventoryFormProps {
	worker: string
	products: string[]
	setStatusCode: setter
}
export type InventoryFormType = FC<InventoryFormProps>

export type UseInspectionType = (
	payload: UseInspectionPayload,
	setInspectionId: setter,
	setStatusCode: setter
) => {
	saveInspection: () => Promise<void>
	deleteInspection: () => Promise<void>
}

export type UseInventoryType = (
	payload: UseInventoryPayload,
	setInventoryId: setter,
	setStatusCode: setter
) => {
	saveInventory: () => Promise<void>
	deleteInventory: () => Promise<void>
}
