import Card from './Card'
import type { Category, ClueState } from '../../types/game'

type ListCardsProps = {
  category: Category
  states: Record<string, ClueState>
  onRevealQuestion: (id: string) => void
}

function ListCards({ category, states, onRevealQuestion }: ListCardsProps) {
  return (
    <div className="space-y-2">
      <h3 className="rounded-md bg-blue-700 p-3 text-center text-sm font-bold uppercase tracking-wide">
        {category.title}
      </h3>
      {category.clues.map((clue) => (
        <Card key={clue.id} clue={clue} state={states[clue.id]} onRevealQuestion={onRevealQuestion} />
      ))}
    </div>
  )
}

export default ListCards
