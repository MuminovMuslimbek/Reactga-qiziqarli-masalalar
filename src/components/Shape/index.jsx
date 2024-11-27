import { useState } from "react";

const Index = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState('')
    function resultFun() {
        switch (Number(input)) {
            case 3:
                setResult("Uchburchak")
                break;
            case 4:
                setResult("To'rtburchak")
                break
            case 5:
                setResult("Beshburchak")
                break
            default:
                setResult("Bunday shakl mavjud emas!!")
                break;
        }
    }
    return (
        <div className="bg-white flex flex-col gap-[10px] p-[20px] rounded-[8px] max-w-[500px] w-full">
            <strong className="text-[20px]">
                1. Shaklni aniqlash:
            </strong>
            <label htmlFor="shape">
                Shaklni burchaklarini kiriting!
            </label>
            <input
                onChange={(e) => {
                    const value = e.target.value;
                    setInput(value);
                }}
                id="shape"
                type="number"
                placeholder="Enter.."
                className="p-[8px] border border-[#0a1050] rounded-[8px]"
            />
            <button
                onClick={() => {
                    if (input) {
                        resultFun();
                    } else {
                        setResult("");
                    }
                }}
                className="p-[8px] bg-blue-500 text-white rounded-[8px] transition-[0.3s] active:scale-[0.98]"
            >Submit</button>

            <label htmlFor="resultShape">
                Result:
            </label>
            <textarea
                value={result}
                id="resultShape"
                className="p-[8px] h-full border resize-none border-[#0a1050] rounded-[5px] outline-none"
                readOnly
            ></textarea>
        </div>
    );
};

export default Index;
