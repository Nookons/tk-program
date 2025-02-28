import React, {useState} from 'react';

import copyIco from '../../assets/ico/content_copy_24dp.svg'
import {useNavigate} from "react-router";
import {HOME_ROUTE} from "../../utils/const";

const Station = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<string>('');
    const [demandInfo, setDemandInfo] = useState<any[]>([]);

    const onSubmitHandle = () => {
        const fetchData = async () => {
            const url = 'http://10.46.143.3/beetle/api/station/tools/getAllDemandInfo';

            const data = {
                siteCode: value,
                containerCode: ''
            };

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('Response:', result);
                    setDemandInfo(result.data)
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Request failed', error);
            }
        };

        fetchData();

    }

    const onCopyHandle = async (number: string) => {
        try {
            await navigator.clipboard.writeText(number);
        } catch (error) {
            console.error('Ошибка при копировании в буфер обмена:', error);
        }
    };


    return (
        <div className={`flex`}>
            <div className={`p-4 min-w-80 h-screen`}>
                <label htmlFor="station" className="block text-sm/6 font-medium text-gray-900">
                    Station number
                </label>
                <div className="mt-2">
                    <input
                        id="station"
                        name="station"
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                        autoComplete="email"
                        className="block border w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        max="9999" // Ограничивает ввод максимальным значением 9999
                    />
                </div>
                <button
                    onClick={onSubmitHandle}
                    type="button"
                    className="w-full bg-indigo-600 text-white font-semibold rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
                <button
                    onClick={() => navigate(HOME_ROUTE)}
                    type="button"
                    className="text-xs mt-2 font-semibold flex justify-center align-middle gap-2 border p-2 rounded hover:bg-gray-200 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                    </svg>

                    Back
                </button>
            </div>
            <ul role="list" className="divide-y border-l p-4 w-full divide-gray-100">
                {demandInfo.map((item) => (
                    <li key={item.sideCode} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            📦
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm/6 flex justify-center align-middle gap-4 font-semibold text-gray-900">{item.hodCode}
                                    <img
                                        onClick={() => onCopyHandle(item.hodCode)}
                                        className="cursor-pointer max-w-6 p-1 rounded hover:bg-indigo-200 fill-amber-400"
                                        src={copyIco}
                                        alt=""
                                    />
                                </p>
                                <p className="mt-1 truncate text-xs/5 text-gray-500">{item.dispatchStatus}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm/6 text-gray-900">{item.siteCode}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Station;
