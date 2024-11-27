import { useState } from "react";

const Index = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    function validate() {
        if (!input1) {
            alert('oltinchi masaladagi birinchi inputni qiymatni kiriting!')
            return false
        }
        if (!input2) {
            alert('oltinchi masaladagi ikkinchi inputni qiymatni kiriting!')
            return false
        }
        return true
    }

    function resultFun(e) {
        e.preventDefault();
        let isValid = validate()
        if (!isValid) {
            return
        }
        let temp = input1;
        setInput1(input2);
        setInput2(temp);
    }

    return (
        <div className="bg-white flex flex-col gap-[10px] p-[20px] rounded-[8px] max-w-[500px] w-full">
            <strong className="text-[20px]">
                6. Ikkita input qiymatini almashtirish
            </strong>
            <label htmlFor="input1">
                Input 1:
            </label>
            <input id="input1" value={input1} onChange={(e) => setInput1(e.target.value)} type="text" placeholder="Enter first value..." className="p-[8px] border border-[#0a1050] rounded-[8px]" />
            <label htmlFor="input2">
                Input 2:
            </label>
            <input id="input2" value={input2} onChange={(e) => setInput2(e.target.value)} type="text" placeholder="Enter second value..." className="p-[8px] border border-[#0a1050] rounded-[8px]" />
            <button onClick={resultFun} className="p-[8px] bg-blue-500 text-white rounded-[8px] transition-[0.3s] active:scale-[0.98]">
                Change value inputs?
            </button>
        </div>
    );
};

export default Index;
