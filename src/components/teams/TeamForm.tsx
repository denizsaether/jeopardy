import { useState } from 'react'

type TeamFormProps = {
  onAddTeam: (name: string) => void
  onTeamAdded?: () => void
}

function TeamForm({ onAddTeam, onTeamAdded }: TeamFormProps) {
  const [name, setName] = useState('')

  const submit = () => {
    const trimmedName = name.trim()
    if (!trimmedName) return
    onAddTeam(trimmedName)
    setName('')
    onTeamAdded?.()
  }

  return (
    <div className="flex gap-2">
      <input
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            submit()
          }
        }}
        placeholder="Nytt lag"
        className="h-9 flex-1 rounded-md border border-white/15 bg-slate-800/80 px-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-300"
      />
      <button
        type="button"
        onClick={submit}
        className="h-9 rounded-md bg-cyan-400 px-3 text-xs font-bold uppercase tracking-wide text-slate-900 transition hover:bg-cyan-300"
      >
        Legg til
      </button>
    </div>
  )
}

export default TeamForm
