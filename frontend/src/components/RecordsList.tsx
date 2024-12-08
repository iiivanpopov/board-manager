import React, { memo, useContext } from 'react'
import { Context } from '../main'
import { Record, RecordsArray } from '../models/RecordResponse'
import { RecordItem } from './RecordItem'

export const RecordsList: React.FC<{ records: RecordsArray }> = memo(
	({ records }) => {
		const { store } = useContext(Context)
		if (!records.length) return <div>No records found.</div>

		return records.map((record: Record, index: number) => (
			<RecordItem
				key={index}
				record={record}
				onDelete={
					'defect' in record
						? () => store.deleteInspection(record.id)
						: () => store.deleteInventory(record.id)
				}
			/>
		))
	}
)
