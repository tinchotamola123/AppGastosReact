import React from "react";
import { useGlobalState } from '../../context/GlobalState'

export default function TransactionItem({ transaction }) {
    
    const { deleteTransaction } = useGlobalState()
    
    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{transaction.description}</p>
            <div>
                <span>${transaction.amount}</span>
                <button className='bg-red-700 text-white px-1 py-1 mx-1 rounded-lg mb-2'
                    onClick={() => {
                    deleteTransaction(transaction.id);
                    }}
                >
                    x
                </button>
            </div>
        </li>
    );
}
