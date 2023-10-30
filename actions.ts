import fs from "fs"

export interface Flashcard {
	question: string
	id: number
	correctChoiceIndex: number
	choices:string[]

	// TODO: add additional fields here
}

export let data: Flashcard[] = []

export function load() {
  data = JSON.parse(fs.readFileSync("flashcards.json").toString("utf-8"))
}

export function save() {
  fs.writeFileSync("flashcards.json", JSON.stringify(data, null, 2))
}

function nextId() {
	return data.length
}

export function newCard(card:Omit<Flashcard,"id">) {
	const nextid = nextId()
		data.push({
			id:nextid,
			question:card.question,
			choices:card.choices,
			correctChoiceIndex:card.correctChoiceIndex
		})
		save()
}

export function getCard(id: number){
	return data.find(c =>c.id === id)
}

export function updateCard(card: Flashcard|Omit<Flashcard,"id">){
	// fields in Flashcard object are all completed present expect "id" field might or might are not present
	if (("id" in card)){
		// if the "id" field is present  
		let index:number = data.findIndex(c => c.id === card.id)
		// find the card with input "id"
		data[index] = card
		// replace the information in card
	}
	else{
		newCard(card)
		// if the "id" field is not present
		// run newCard fuction to generate one
	}
	save()
}

export function printCard(x = data) {
	x.forEach(c => {
		console.log(JSON.stringify(c, null, 2))
		console.log()
	})
}
