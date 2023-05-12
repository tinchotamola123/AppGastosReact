import { useGlobalState } from '../context/GlobalState'

function Balance() {
    
    const { transactions }= useGlobalState();
    
    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div className='flex justify-between'>
            <h3>Tu Balance</h3>
            <h1 className='text-2x1 font-bold'>${total}</h1>
            <div>
                
            </div>
        </div>
)
}

export default Balance
