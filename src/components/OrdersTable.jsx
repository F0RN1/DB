import { orders } from '../data/dashboard'

const statusClasses = {
  'В работе': 'bg-indigo-50 text-indigo-700',
  'Завершён': 'bg-emerald-50 text-emerald-700',
  'На проверке': 'bg-amber-50 text-amber-700',
}

function OrdersTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5 sm:px-6">
        <div><h2 className="font-bold text-slate-900">Последние заказы</h2><p className="mt-1 text-sm text-slate-500">Обновлено сегодня в 12:40</p></div>
        <button type="button" className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Все заказы</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
            <tr><th className="px-6 py-4 font-medium">Заказ</th><th className="px-6 py-4 font-medium">Клиент</th><th className="px-6 py-4 font-medium">Услуга</th><th className="px-6 py-4 font-medium">Статус</th><th className="px-6 py-4 text-right font-medium">Сумма</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-700">{order.id}</td>
                <td className="px-6 py-4 text-slate-600">{order.client}</td>
                <td className="px-6 py-4 text-slate-500">{order.service}</td>
                <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[order.status]}`}>{order.status}</span></td>
                <td className="px-6 py-4 text-right font-semibold text-slate-800">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default OrdersTable

