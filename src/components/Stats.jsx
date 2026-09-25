import { stats } from '../data/dashboard'

const colorClasses = {
  indigo: 'bg-indigo-50 text-indigo-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
  rose: 'bg-rose-50 text-rose-600',
}

function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <span className={`rounded-lg px-2 py-1 text-xs font-semibold ${colorClasses[stat.color]}`}>↗ {stat.change}</span>
          </div>
          <p className="mt-5 text-3xl font-bold text-slate-900">{stat.value}</p>
          <div className="mt-4 h-1.5 rounded-full bg-slate-100"><div className="h-full w-3/4 rounded-full bg-indigo-500" /></div>
        </article>
      ))}
    </div>
  )
}

export default Stats

