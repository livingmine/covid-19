import React from 'react'

function Counter () {

    const today = new Date();
    const getDay = String(today.getDate());
    const getMonth = String(today.toLocaleString('default', { month: 'long' }));
    const getYear = today.getFullYear();

    return (
        <div>
            <div className="w-full text-center mt-4">
                <p className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl">Monitoring COVID-19</p>
                <p className="text-sm text-gray-700">last updated at {getDay + ' ' + getMonth + ' ' + getYear}</p>
            </div>

            <div className="w-full mt-4">
                <div className="flex flex-row justify-center items-center">
                    <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" />
                    </svg>
                    <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">30</p>
                    <p className="mt-3 ml-1 text-sm text-gray-700">days</p>
                </div>

                <div className="flex justify-center">
                    <p className="text-xs font-hairline text-gray-700">since first case occured</p>
                </div>
            </div>
        </div>
    );
}

export default Counter