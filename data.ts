import fs from "fs"

export interface Flashcard {
	question: string
	id: number
	correctChoiceIndex: number
	choices:string[]

	// TODO: add additional fields here
}

