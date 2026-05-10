import type { Clue, ClueState } from '../../types/game'

type CardProps = {
	clue: Clue
	state: ClueState
	onRevealQuestion: (id: string) => void
}

function Card({ clue, state, onRevealQuestion }: CardProps) {
	const usedClass = state.used
		? 'bg-rose-600/80 border-rose-400/40'
		: 'bg-blue-900 border-blue-400/30 hover:bg-blue-800'

	return (
		<article className={`rounded-md border p-2 transition ${usedClass}`}>
			<button
				type="button"
				onClick={() => onRevealQuestion(clue.id)}
				disabled={state.used}
				className="h-20 w-full text-2xl font-extrabold text-yellow-300 disabled:cursor-not-allowed disabled:text-slate-300"
			>
				{state.used ? 'Brukt' : clue.value}
			</button>
		</article>
	)
}

export default Card
