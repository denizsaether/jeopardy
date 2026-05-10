import type { Team } from '../../types/team'

type TeamCardProps = {
  team: Team
  isActive: boolean
}

function TeamCard({ team, isActive }: TeamCardProps) {
  const activeClass = isActive
    ? 'border-cyan-300 bg-cyan-400/10 ring-1 ring-cyan-300/60'
    : 'border-white/15 bg-white/5'

  return (
    <article className={`rounded-lg border p-2.5 shadow-lg shadow-cyan-500/10 backdrop-blur-sm ${activeClass}`}>
      <div className="flex items-center justify-between gap-2">
        <h3 className="truncate text-sm font-semibold">{team.name}</h3>
        <p className="rounded bg-slate-950/60 px-2 py-0.5 text-sm font-bold text-cyan-300">{team.score}</p>
      </div>
      {isActive && <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-200">Sin tur</p>}
    </article>
  )
}

export default TeamCard
