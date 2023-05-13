import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import ExpenseChart from './components/transactions/ExpenseChart'


var mediaquery = window.matchMedia("(max-width: 400px)");
function funcion() {
  var div = document.querySelector(".grande");
  if (mediaquery.matches) {
    div.classList.remove("rojo");
    div.removeAttribute("id");
  } else {
    div.classList.add("rojo");
    div.setAttribute("id", "blanco")
  }
}
mediaquery.addListener(funcion);


function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-900 text-white min-h-screen	flex justify-center items-center'> 
        <div id='contenedor1' className='container mx-auto w-3/6'>
          <div id='contenedor' className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
            <div className=''>
              <h1 className='text-4xl	 font-bold'>Gastos</h1>
              <IncomeExpenses/>
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col flex-1'> 
              <ExpenseChart />
              <TransactionList />
              <div className='bg-zinc-780 text-white text-center'>
                By Martin Tamola
              </div>
            </div>

          </div>
          
        </div>
      </div>
      
    </GlobalProvider>
  )
}

export default App
