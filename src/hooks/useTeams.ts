import { useState } from 'react'
import type { Team } from '../types/team'

function makeTeam(name: string): Team {
  return { id: crypto.randomUUID(), name, score: 0 }
}

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([])

  const addTeam = (name: string) => {
    const trimmed = name.trim()
    if (!trimmed) return
    setTeams((prev) => [...prev, makeTeam(trimmed)])
  }

  const updateScore = (id: string, delta: number) => {
    setTeams((prev) => prev.map((team) => (team.id === id ? { ...team, score: team.score + delta } : team)))
  }

  const resetScores = () => {
    setTeams((prev) => prev.map((team) => ({ ...team, score: 0 })))
  }

  return { teams, addTeam, updateScore, resetScores }
}
