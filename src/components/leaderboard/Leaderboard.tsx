import { useMemo } from 'react'
import type { Team } from '../../types/team'

type LeaderboardProps = {
  teams: Team[]
}

const placeStyles = ['text-yellow-300', 'text-slate-200', 'text-amber-600']

function Leaderboard({ teams }: LeaderboardProps) {
  const topThree = useMemo(
    () => [...teams].sort((first, second) => second.score - first.score).slice(0, 3),
    [teams],
  )

  return (
    <aside className="rounded-xl border border-white/10 bg-slate-900/75 p-3 md:p-4 lg:p-8">
      <h2 className="text-lg font-bold text-cyan-300">Toppliste</h2>

      <div className="mt-3 space-y-2">
        {topThree.length === 0 ? (
          <p className="text-xs text-slate-300">Ingen lag enda.</p>
        ) : (
          topThree.map((team, index) => (
            <article
              key={team.id}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className={`text-sm font-extrabold ${placeStyles[index] ?? 'text-slate-200'}`}>
                  #{index + 1}
                </span>
                <span className="text-sm font-semibold text-slate-100">{team.name}</span>
              </div>
              <span className="text-sm font-bold text-cyan-300">{team.score}</span>
            </article>
          ))
        )}
      </div>
    </aside>
  )
}

export default Leaderboard
