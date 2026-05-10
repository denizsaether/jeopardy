import { useState } from 'react'
import TeamCard from './TeamCard'
import TeamForm from './TeamForm'
import type { Team } from '../../types/team'

type TeamsOverviewProps = {
  teams: Team[]
  onAddTeam: (name: string) => void
  currentTeamId: string | null
}

function TeamsOverview({
  teams,
  onAddTeam,
  currentTeamId,
}: TeamsOverviewProps) {
  const [isAddingTeam, setIsAddingTeam] = useState(false)

  const handleTeamAdded = () => {
    setIsAddingTeam(false)
  }

  return (
    <section className="rounded-xl border border-white/10 bg-slate-900/75 p-3 md:p-4 lg:p-8">
      <div className="mb-3">
        {isAddingTeam ? (
          <div className="flex items-center gap-2">
            <TeamForm onAddTeam={onAddTeam} onTeamAdded={handleTeamAdded} />
            <button
              type="button"
              onClick={() => setIsAddingTeam(false)}
              className="h-9 rounded-md bg-white/10 px-3 text-xs font-semibold transition hover:bg-white/20"
            >
              Avbryt
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsAddingTeam(true)}
            className="h-9 rounded-md bg-cyan-400 px-3 text-xs font-bold uppercase tracking-wide text-slate-900 transition hover:bg-cyan-300"
          >
            + Legg til lag
          </button>
        )}
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} isActive={currentTeamId === team.id} />
        ))}
        {teams.length === 0 && <p className="text-xs text-slate-300">Ingen lag enda.</p>}
      </div>
    </section>
  )
}

export default TeamsOverview
