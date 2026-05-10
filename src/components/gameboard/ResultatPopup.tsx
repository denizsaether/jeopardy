import type { AnswerResult } from '../../types/game'

type ResultatPopupProps = {
  result: AnswerResult
  slurker: number
  teamName: string
}

function ResultatPopup({ result, slurker, teamName }: ResultatPopupProps) {
  const isCorrect = result === 'correct'
  const title = isCorrect ? 'Riktig svar!' : 'Feil svar!'
  const actionText = isCorrect ? 'Del ut' : 'Drikk'
  const icon = isCorrect ? '✅' : '🍻'
  const shellClass = isCorrect ? 'bg-emerald-950/70' : 'bg-rose-950/70'
  const colorClass = isCorrect
    ? 'border-emerald-300/60 bg-emerald-500/25 text-emerald-50 shadow-emerald-500/30'
    : 'border-rose-300/60 bg-rose-500/25 text-rose-50 shadow-rose-500/30'
  const slurkText = `slurk${slurker === 1 ? '' : 'er'}`

  return (
    <div className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center px-4 ${shellClass}`}>
      <article
        className={`animate-popup-party w-full max-w-3xl rounded-3xl border-2 p-8 text-center shadow-2xl backdrop-blur-sm md:p-10 ${colorClass}`}
      >
        <p className="text-4xl md:text-5xl">{icon}</p>
        <p className="mt-2 text-3xl font-extrabold uppercase tracking-wide md:text-4xl">{title}</p>
        <p className="mt-3 text-xl font-semibold md:text-2xl">{teamName}</p>
        <p className="mt-4 text-4xl font-black md:text-5xl">
          {actionText} {slurker} {slurkText}
        </p>
      </article>
    </div>
  )
}

export default ResultatPopup
