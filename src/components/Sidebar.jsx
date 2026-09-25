function Sidebar() {
  const links = [
    ['◈', 'Обзор', true],
    ['▣', 'Заказы'],
    ['◫', 'Клиенты'],
    ['◌', 'Сообщения'],
    ['⚙', 'Настройки'],
  ]

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white p-5 lg:block">
      <a href="#" className="block px-3 text-xl font-bold text-slate-900">workspace<span className="text-indigo-600">.</span></a>
      <nav className="mt-10 space-y-2">
        {links.map(([icon, label, active]) => (
          <a key={label} href="#" className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            <span className="text-lg">{icon}</span>{label}
          </a>
        ))}
      </nav>
      <div className="mt-20 rounded-2xl bg-indigo-600 p-5 text-white">
        <p className="text-sm font-semibold">Нужна помощь?</p>
        <p className="mt-2 text-xs leading-5 text-indigo-100">Свяжитесь с поддержкой, если у вас есть вопросы.</p>
        <button type="button" className="mt-4 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-indigo-700">Написать нам</button>
      </div>
    </aside>
  )
}

export default Sidebar

