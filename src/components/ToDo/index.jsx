import React, { useState } from 'react'

const index = () => {
    const [input, setInput] = useState(null)
    const [card, setCard] = useState([])
    function validate() {
        if (!input) {
            alert('ToDo ni inputini to`ldiring!!')
            return false
        }
        return true
    }
    function resultFun(e) {
        e.preventDefault();
        const isValid = validate()
        if (!isValid) {
            return
        }
        const newPlan = { input }
        setCard([...card, newPlan])
        e.target.reset()
        setInput('')
    }
    return (
        <div className="bg-white flex flex-col gap-[10px] p-[20px] rounded-[8px] max-w-[500px] w-full">
            <strong className="text-[20px]">7. To-do ro'yxat yaratish:</strong>
            <form onSubmit={resultFun} className="flex gap-[10px] w-full">
                <input className='p-[8px] w-full border border-[#0a1050] rounded-[8px]' onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter your task..' />
                <button type='submit' className='p-[8px] w-32 bg-blue-500 text-white rounded-[8px] transition-[0.3s] active:scale-[0.98]'>
                    Add
                </button>
            </form>
            <div className='flex flex-col gap-3'>
                {
                    card.map((e, index) => (
                        <div key={index} className='flex items-center justify-between px-3 border border-[#0a1050] rounded-[8px]'>
                            <p className='text-[20px]'>{e.input}</p>
                            <button
                                onClick={() => {
                                    if (confirm('Are you sure you want to delete this item?')) {
                                        setCard(card.filter((_, i) => i !== index));
                                    }
                                }}
                                className='text-[40px] text-blue-950 rotate-[45deg] transition-[0.3s] active:scale-95'>
                                +
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default index
