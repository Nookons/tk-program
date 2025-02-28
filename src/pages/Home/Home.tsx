import React from 'react';
import { useNavigate } from "react-router";

import workStationImg from '../../assets/img/workStation.png';
import robotImg from '../../assets/img/robot.webp';
import {STATION_ROUTE} from "../../utils/const";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={`h-full p-4`}>
            <h4 className={`text-indigo-600 font-semibold text-xl py-4`}>TK Warehouse</h4>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div
                    onClick={() => navigate(STATION_ROUTE)}
                    className={`relative cursor-pointer p-4 rounded hover:bg-indigo-200 hover:text-white transition shadow`}
                >
                    <h4 className={`text-base/7 font-semibold text-indigo-600`}>Work Station info</h4>
                    <div className={`grid grid-cols-2`}>
                        <p className={`mt-6 text-xl/8 text-gray-700`}>This is page for check current status of work
                            station</p>
                        <div className={`flex align-middle justify-center`}>
                            <img
                                className={`max-w-60`}
                                src={workStationImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`relative cursor-pointer p-4 rounded hover:bg-indigo-200 hover:text-white transition shadow`}>
                    <h4 className={`text-base/7 font-semibold text-indigo-600`}>Robot</h4>
                    <div className={`grid grid-cols-2`}>
                        <p className={`mt-6 text-xl/8 text-gray-700`}>This is page for check current status of work
                            station</p>
                        <div className={`flex align-middle justify-center`}>
                            <img
                                src={robotImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
