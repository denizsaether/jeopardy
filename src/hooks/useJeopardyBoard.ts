import { useMemo, useState } from 'react'
import type { BoardState, Category } from '../types/game'

function createInitialState(categories: Category[]): BoardState {
  return categories.flatMap((category) => category.clues).reduce<BoardState>((acc, clue) => {
    acc[clue.id] = { showQuestion: false, showAnswer: false, used: false }
    return acc
  }, {})
}

export function useJeopardyBoard(categories: Category[]) {
  const initialState = useMemo(() => createInitialState(categories), [categories])
  const [boardState, setBoardState] = useState<BoardState>(initialState)
  const [activeClueId, setActiveClueId] = useState<string | null>(null)

  const updateClue = (id: string, updater: (prev: BoardState[string]) => BoardState[string]) => {
    setBoardState((prev) => {
      const currentClue = prev[id]
      if (!currentClue) return prev
      return { ...prev, [id]: updater(currentClue) }
    })
  }

  const revealQuestion = (id: string) => {
    updateClue(id, (prev) => ({ ...prev, showQuestion: true }))
    setActiveClueId(id)
  }
  const revealAnswer = (id: string) => updateClue(id, (prev) => ({ ...prev, showAnswer: true }))
  const markUsed = (id: string) => updateClue(id, (prev) => ({ ...prev, used: true }))
  const closeActiveClue = () => setActiveClueId(null)
  const resetBoard = () => {
    setBoardState(initialState)
    setActiveClueId(null)
  }

  return { boardState, activeClueId, revealQuestion, revealAnswer, markUsed, closeActiveClue, resetBoard }
}
