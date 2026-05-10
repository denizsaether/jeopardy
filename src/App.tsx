import { useEffect, useState } from 'react'
import Gameboard from './components/gameboard/Gameboard'
import Leaderboard from './components/leaderboard/Leaderboard'
import TeamsOverview from './components/teams/TeamsOverview'
import { mockCategories } from './data/mockGame'
import { useJeopardyBoard } from './hooks/useJeopardyBoard'
import { useTeams } from './hooks/useTeams'

function App() {
  const { teams, addTeam, updateScore, resetScores } = useTeams()
  const { boardState, activeClueId, revealQuestion, revealAnswer, markUsed, closeActiveClue, resetBoard } =
    useJeopardyBoard(mockCategories)
  const [turnIndex, setTurnIndex] = useState(0)

  useEffect(() => {
    if (teams.length === 0) {
      setTurnIndex(0)
      return
    }
    setTurnIndex((prev) => prev % teams.length)
  }, [teams.length])

  const currentTeam = teams[turnIndex] ?? null
  const currentTeamId = currentTeam?.id ?? null
  const currentTeamName = currentTeam?.name ?? null

  const advanceTurn = () => {
    if (teams.length === 0) return
    setTurnIndex((prev) => (prev + 1) % teams.length)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1e293b,#020617)] px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-screen-2xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-4xl font-extrabold tracking-wide text-yellow-300 drop-shadow-md">Jeopardy-Premium</h1>
          <div className="flex items-center gap-1.5">
            <button
              onClick={resetScores}
              className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold transition hover:bg-white/20"
            >
              Nullstill poeng
            </button>
            <button
              onClick={resetBoard}
              className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold transition hover:bg-white/20"
            >
              Nullstill brett
            </button>
          </div>
        </header>
      
        <div className="mb-4 grid gap-4 xl:grid-cols-[2fr_1fr]">
          <TeamsOverview
            teams={teams}
            onAddTeam={addTeam}
            currentTeamId={currentTeamId}
          />
          <Leaderboard teams={teams} />
        </div>

        <Gameboard
          categories={mockCategories}
          boardState={boardState}
          activeClueId={activeClueId}
          currentTeamId={currentTeamId}
          currentTeamName={currentTeamName}
          onRevealQuestion={revealQuestion}
          onRevealAnswer={revealAnswer}
          onMarkUsed={markUsed}
          onScoreChange={updateScore}
          onCloseActiveClue={closeActiveClue}
          onAdvanceTurn={advanceTurn}
        />
      </div>
    </main>
  )
}

export default App
