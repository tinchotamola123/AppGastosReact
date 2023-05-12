import { useGlobalState } from '../../context/GlobalState'
import { useState } from 'react'

function TransactionForm() {
    
    const { addTransaction } = useGlobalState()
    const [description , setDescription] = useState("")
    const [amount , setAmount] = useState(0)    

    const onSubmit = (e) =>{
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount : +amount
        });
        setAmount(0);
        setDescription("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={description} type="text" placeholder='Ingresa una Descripción' onChange={(e)=> setDescription(e.target.value)}
                className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'/>
                <input value={amount} type="number" step={0.01} placeholder='00.00' onChange={(e)=>setAmount(e.target.value)}
                className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'/>
                <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>
                    Agregar Transacción
                </button>
            </form>
        </div>
)
}

export default TransactionForm
