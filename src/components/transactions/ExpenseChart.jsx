import {VictoryPie , VictoryLabel} from 'victory'
import { useGlobalState } from '../../context/GlobalState'

function ExpenseChart() {
    
    const { transactions } = useGlobalState();

    const totalIncomes = transactions.filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction)=> (acc += transaction.amount),0)

    const totalExpenses = transactions.filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction)=> (acc += transaction.amount),0)*-1; 

    const totalExpensesPercentage = Math.round((totalExpenses / totalIncomes) * 100)

    const totalincomesPercentage = 100 - totalExpensesPercentage


    console.log(totalIncomes)
    console.log(totalExpenses)
    console.log(totalExpensesPercentage)
    console.log(totalincomesPercentage)
    return (
        <VictoryPie
        colorScale={["#e74c3c","#2ecc71"]}
        data={[
            { x: "Expenses", y: totalExpensesPercentage },
            { x: "Incomes", y: totalincomesPercentage },
        ]}
        animate={{
            duration: 200
        }}
        labels={({datum})=> `${datum.y}%`}
        labelComponent={
            <VictoryLabel 
                angle={45}
                style={{
                    fill:"white"
                }}
            />
        }
        />
)
}

export default ExpenseChart
