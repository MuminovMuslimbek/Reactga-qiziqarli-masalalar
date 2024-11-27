import { useState } from "react";

const Index = () => {
    const [color, setColor] = useState('');

    return (
        <div className="bg-white flex flex-col gap-[10px] p-[20px] rounded-[8px] max-w-[500px] w-full justify-between">
            <strong className="text-[20px]">
                4. Foydalanuvchining tanlovi bo’yicha rang o’zgartirish:
            </strong>
            <h4>Choose color:</h4>
            <div className="flex items-center gap-2 select-none justify-around">
                <label className="cursor-pointer flex items-center gap-2">
                    <input type="radio" name="color" value="bg-red-500" onChange={(e) => setColor(e.target.value)} />
                    Qizil
                </label>
                <label className="cursor-pointer flex items-center gap-2">
                    <input type="radio" name="color" value="bg-green-500" onChange={(e) => setColor(e.target.value)} />
                    Yashil
                </label>
                <label className="cursor-pointer flex items-center gap-2">
                    <input type="radio" name="color" value="bg-yellow-500" onChange={(e) => setColor(e.target.value)} />
                    Sariq
                </label>
            </div>
            <div className={`${color ? color : 'bg-blue-500'} w-full h-[100px] rounded-[8px] mt-4 transition-colors duration-300`}></div>
        </div>
    );
};

export default Index;
