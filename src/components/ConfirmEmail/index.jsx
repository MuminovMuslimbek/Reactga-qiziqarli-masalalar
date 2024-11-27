import { useState } from "react";

const Index = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    function validate() {
        if (!input) {
            alert('Emailni inputi ni kiriting!')
            return false
        }
        return true
    }

    function resultFun(e) {
        e.preventDefault();
        let isValid = validate();
        if (!isValid) {
            return;
        }
        if (input.includes('@') && input.includes('.com')) {
            setResult("Email to'g'ri kiritildi!");
        } else {
            setResult("Email noto'g'ri kiritildi!");
        }
        setInput('');
    }


    return (
        <div className="bg-white flex flex-col gap-[10px] p-[20px] rounded-[8px] max-w-[500px] w-full">
            <strong className="text-[20px]">
                5. To'g'ri email kiritish tekshiruvi:
            </strong>
            <form className="flex flex-col gap-[10px] w-full" onSubmit={resultFun}>
                <label htmlFor="email">
                    Email:
                </label>
                <input value={input} onChange={(e) => setInput(e.target.value)} id="email" type="text" placeholder="Enter email.." className="p-[8px] border border-[#0a1050] rounded-[8px]" />
                <button type="submit" className="p-[8px] bg-blue-500 text-white rounded-[8px] transition-[0.3s] active:scale-[0.98]">
                    Submit
                </button>
            </form>
            <label htmlFor="resultEmail">
                Result:
            </label>
            <textarea value={result} id="resultEmail" className="p-[8px] h-full border resize-none border-[#0a1050] rounded-[5px] outline-none" readOnly></textarea>
        </div>
    );
};

export default Index;
