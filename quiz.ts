import * as readline from 'readline'
import { data, load } from './actions'

export async function runQuiz(questions: { prompt: string, correctAnswer: string }[]) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	let numberCorrect = 0
	for (const { prompt, correctAnswer } of questions) {
		console.log(prompt)
	  const answer = await new Promise((resolve) => rl.question('> ', resolve))
		if (answer === correctAnswer) {
			console.log("right!")
			++numberCorrect
		} else {
			console.log("sorry, the answer is", correctAnswer)
		}
	}
	console.log("you got", numberCorrect, "out of", questions.length, "correct")
	rl.close()
}

// TODO: replace code below
// [
// 	{
// 		prompt: '1+2',
// 		correctAnswer: '3'
// 	},
// 	{
// 		prompt: "T or F: Raleigh is the capital of North Carolina",
// 		correctAnswer: "T"
// 	}
// ]

let  gq = generateQuiz()
runQuiz(gq)
		
export function generateQuiz(): { prompt: string, correctAnswer: string }[]{
// output a data structure compatible with runQuiz based on the cards
	load()
	let q:{ prompt: string, correctAnswer: string }[] = []
	let letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
	
	data.map(function(val, index){ 
			let c={prompt:"",correctAnswer:""}
			c.prompt = val.question
			val.choices.map(function (val, ins) {
				c.prompt += "" + letter[ins] + ":" + val + " "
			})
			c.correctAnswer = letter[val.correctChoiceIndex]
			q[index] = c
	}) 
	return q
}
