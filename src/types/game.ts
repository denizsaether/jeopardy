export type Clue = {
  id: string
  value: number
  question: string
  answer: string
}

export type Category = {
  id: string
  title: string
  clues: Clue[]
}

export type ClueState = {
  showQuestion: boolean
  showAnswer: boolean
  used: boolean
}

export type BoardState = Record<string, ClueState>

export type AnswerResult = 'correct' | 'wrong'
