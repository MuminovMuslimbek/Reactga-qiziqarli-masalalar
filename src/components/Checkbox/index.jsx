import { useState } from "react";

const Index = () => {
    const [result, setResult] = useState([]);

    function checked(e, language) {
        if (e.target.checked) {
            setResult((prev) => [...prev, language]);
        } else {
            setResult((prev) => prev.filter((item) => item !== language));
        }
    }

    return (
        <div className="bg-white flex flex-col gap-[10px] p-[20px] rounded-[8px] max-w-[500px] w-full">
            <strong className="text-[20px]">
                3. Chek qutisi (Checkbox) bilan ro’yxat tuzish:
            </strong>
            <h4>Choose programming languages:</h4>
            <div className="select-none flex gap-x-20 justify-between gap-y-2 p-3 mx-24 flex-wrap bg-blue-500 rounded-[8px]">
                <label htmlFor="html" className="cursor-pointer text-[18px] font-medium text-[#f8f8f8] flex gap-[5px]">
                    <input
                        id="html" type="checkbox" className="cursor-pointer" onChange={(e) => checked(e, "HTML")} />
                    HTML
                </label>
                <label htmlFor="css" className="cursor-pointer text-[18px] font-medium text-[#f8f8f8] flex gap-[5px]">
                    <input
                        id="css" type="checkbox" className="cursor-pointer" onChange={(e) => checked(e, "CSS")} />
                    CSS
                </label>
                <label htmlFor="react" className="cursor-pointer text-[18px] font-medium text-[#f8f8f8] flex gap-[5px]">
                    <input
                        id="react" type="checkbox" className="cursor-pointer" onChange={(e) => checked(e, "React")} />
                    React
                </label>
                <label htmlFor="js" className="cursor-pointer text-[18px] font-medium text-[#f8f8f8] flex gap-[5px]">
                    <input
                        id="js" type="checkbox" className="cursor-pointer" onChange={(e) => checked(e, "JavaScript")} />
                    JavaScript
                </label>
                <label htmlFor="python" className="cursor-pointer text-[18px] font-medium text-[#f8f8f8] flex gap-[5px]">
                    <input
                        id="python" type="checkbox" className="cursor-pointer" onChange={(e) => checked(e, "Python")} />
                    Python
                </label>
                <label htmlFor="csharp" className="cursor-pointer text-[18px] font-medium text-[#f8f8f8] flex gap-[5px]">
                    <input
                        id="csharp" type="checkbox" className="cursor-pointer" onChange={(e) => checked(e, "C#")} />
                    C#
                </label>
            </div>
            <label htmlFor="resultShape">Result:</label>
            <textarea id="resultShape" value={result.join(", ")} className="p-[8px] h-full border resize-none border-[#0a1050] rounded-[5px] outline-none" readOnly></textarea>
        </div>
    );
};

export default Index;
