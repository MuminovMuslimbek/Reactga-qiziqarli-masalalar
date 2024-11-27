import { useState } from "react";

const Index = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');

    function resultFun(e) {
        e.preventDefault();
        if (input1 === input2) {
            setResult("Parol mos keldi!");
        } else {
            setResult("Parol mos kelmadi!");
        }
    }

    return (
        <div className="bg-white flex flex-col gap-[10px] p-[20px] rounded-[8px] max-w-[500px] w-full">
            <strong className="text-[20px]">
                2. Parol tekshirish formasi:
            </strong>
            <form className="flex flex-col gap-[10px] w-full" onSubmit={resultFun}>
                <label htmlFor="password1">
                    Password:
                </label>
                <input onChange={(e) => setInput1(e.target.value)} id="password1" type="password" placeholder="Enter.." className="p-[8px] border border-[#0a1050] rounded-[8px]"/>
                <label htmlFor="password2">
                    Confirm Password:
                </label>
                <input onChange={(e) => setInput2(e.target.value)} id="password2" type="password" placeholder="Enter.." className="p-[8px] border border-[#0a1050] rounded-[8px]"/>
                <button type="submit" className="p-[8px] bg-blue-500 text-white rounded-[8px] transition-[0.3s] active:scale-[0.98]">
                    Submit
                </button>
            </form>
            <label htmlFor="resultShape">
                Result:
            </label>
            <textarea value={result} id="resultShape" className="p-[8px] h-full border resize-none border-[#0a1050] rounded-[5px] outline-none" readOnly></textarea>
        </div>
    );
};

export default Index;
