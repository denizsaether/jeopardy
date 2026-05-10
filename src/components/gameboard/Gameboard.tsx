import { useEffect, useMemo, useRef, useState } from 'react'
import ClueOverlay from './ClueOverlay'
import ListCards from './ListCards'
import ResultatPopup from './ResultatPopup'
import type { AnswerResult, BoardState, Category } from '../../types/game'

const RESULTAT_POPUP_DURATION_MS = 5000

type ResultatPopupState = {
	result: AnswerResult
	slurker: number
	teamName: string
}

type GameboardProps = {
	categories: Category[]
	boardState: BoardState
	activeClueId: string | null
	currentTeamId: string | null
	currentTeamName: string | null
	onRevealQuestion: (id: string) => void
	onRevealAnswer: (id: string) => void
	onMarkUsed: (id: string) => void
	onScoreChange: (id: string, delta: number) => void
	onCloseActiveClue: () => void
	onAdvanceTurn: () => void
}

function Gameboard({
	categories,
	boardState,
	activeClueId,
	currentTeamId,
	currentTeamName,
	onRevealQuestion,
	onRevealAnswer,
	onMarkUsed,
	onScoreChange,
	onCloseActiveClue,
	onAdvanceTurn,
}: GameboardProps) {
	const [resultatPopup, setResultatPopup] = useState<ResultatPopupState | null>(null)
	const popupTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)

	useEffect(() => {
		return () => {
			if (popupTimeoutRef.current) {
				window.clearTimeout(popupTimeoutRef.current)
				popupTimeoutRef.current = null
			}
		}
	}, [])

	const activeClue = useMemo(
		() => categories.flatMap((category) => category.clues).find((clue) => clue.id === activeClueId) ?? null,
		[categories, activeClueId],
	)

	const activeClueState = activeClueId ? boardState[activeClueId] : null

	const judgeAnswer = (result: AnswerResult) => {
		if (!activeClue || !currentTeamId || !currentTeamName) return
		const slurker = Math.max(1, Math.floor(activeClue.value / 100))
		const delta = result === 'correct' ? activeClue.value : -activeClue.value
		onScoreChange(currentTeamId, delta)
		onMarkUsed(activeClue.id)
		onCloseActiveClue()
		setResultatPopup({ result, slurker, teamName: currentTeamName })
		if (popupTimeoutRef.current) {
			window.clearTimeout(popupTimeoutRef.current)
			popupTimeoutRef.current = null
		}
		popupTimeoutRef.current = window.setTimeout(() => {
			setResultatPopup(null)
			popupTimeoutRef.current = null
		}, RESULTAT_POPUP_DURATION_MS)
		onAdvanceTurn()
	}

	return (
		<>
			<section className="rounded-2xl border border-white/10 bg-slate-900/40 p-3 md:p-4 lg:p-8">
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				{categories.map((category) => (
					<ListCards
						key={category.id}
						category={category}
						states={boardState}
						onRevealQuestion={onRevealQuestion}
					/>
				))}
				</div>
			</section>

			{activeClue && activeClueState && !activeClueState.used && (
				<ClueOverlay
					clue={activeClue}
					state={activeClueState}
					onRevealAnswer={onRevealAnswer}
					onJudgeAnswer={judgeAnswer}
					onClose={onCloseActiveClue}
					canJudge={Boolean(currentTeamId)}
				/>
			)}

			{resultatPopup && (
				<ResultatPopup
					result={resultatPopup.result}
					slurker={resultatPopup.slurker}
					teamName={resultatPopup.teamName}
				/>
			)}
		</>
	)
}

export default Gameboard
