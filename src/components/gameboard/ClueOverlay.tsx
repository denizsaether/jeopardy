import { useEffect } from 'react'
import type { AnswerResult, Clue, ClueState } from '../../types/game'

type ClueOverlayProps = {
  clue: Clue
  state: ClueState
  onRevealAnswer: (id: string) => void
  onJudgeAnswer: (result: AnswerResult) => void
  onClose: () => void
  canJudge: boolean
}

function ClueOverlay({ clue, state, onRevealAnswer, onJudgeAnswer, onClose, canJudge }: ClueOverlayProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4">
      <article className="w-full max-w-6xl rounded-3xl border border-cyan-300/30 bg-slate-900 p-8 shadow-2xl md:p-12">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-semibold uppercase tracking-wide text-cyan-300 md:text-xl">{clue.value} poeng</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20 md:text-base"
          >
            Lukk
          </button>
        </div>

        <p className="mb-8 text-center text-4xl font-extrabold text-white md:text-5xl">{clue.question}</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {state.showAnswer ? (
            <p className="w-full text-center text-3xl font-bold text-cyan-200 md:text-4xl">Svar: {clue.answer}</p>
          ) : (
            <button
              type="button"
              onClick={() => onRevealAnswer(clue.id)}
              className="rounded-md bg-cyan-400 px-6 py-3 text-lg font-semibold text-slate-900 md:text-xl"
            >
              Vis svar
            </button>
          )}

          {!state.used && (
            <>
              <button
                type="button"
                onClick={() => onJudgeAnswer('wrong')}
                disabled={!canJudge}
                className="rounded-md bg-rose-500 px-6 py-3 text-lg font-semibold disabled:cursor-not-allowed disabled:opacity-50 md:text-xl"
              >
                Feil
              </button>
              <button
                type="button"
                onClick={() => onJudgeAnswer('correct')}
                disabled={!canJudge}
                className="rounded-md bg-emerald-500 px-6 py-3 text-lg font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-xl"
              >
                Riktig
              </button>
            </>
          )}
        </div>

        {!canJudge && !state.used && (
          <p className="mt-5 text-center text-lg font-semibold text-amber-300">Legg til minst ett lag for å registrere svar.</p>
        )}
      </article>
    </div>
  )
}

export default ClueOverlay
