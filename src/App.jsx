import Sidebar from './components/Sidebar'
import Stats from './components/Stats'
import OrdersTable from './components/OrdersTable'

function App() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />
      <main className="min-w-0 flex-1">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
          <div><p className="text-sm text-slate-500">Среда, 24 сентября</p><h1 className="mt-1 text-2xl font-bold">Добрый день, Forni!</h1></div>
          <div className="flex items-center gap-3"><button type="button" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100">⌕</button><div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">F</div></div>
        </header>
        <div className="space-y-6 p-5 sm:p-8">
          <Stats />
          <OrdersTable />
        </div>
      </main>
    </div>
  )
}

export default App
