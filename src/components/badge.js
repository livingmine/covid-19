import React from 'react'
import PropTypes from 'prop-types'

function Badge({ caseNumber, casePercentage, badgeBgColor, borderColor, iconColor }) {
    return (
        // <div className="flex justify-between items-baseline bg-red-100 border-2 border-red-400 px-1 py-1 rounded-lg">
        <div className={`flex justify-between items-baseline ${badgeBgColor} border-2 ${borderColor} px-1 py-1 rounded-lg`}>
            <div className="flex flex-row items-center">
                <span className="text-teal-600 text-xs font-extrabold mr-1" >+ {caseNumber}</span>
                <svg className="w-3 h-3 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
            </div>
            <div className="flex flex-row items-center">
                <span className="text-teal-600 text-xs font-extrabold mr-1">{casePercentage} %</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 fill-current ${iconColor}`} viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" />
                </svg>
            </div>
        </div>
    );
}

Badge.propTypes = {
    caseNumber: PropTypes.number.isRequired,
    casePercentage: PropTypes.number.isRequired,
    badgeBgColor: PropTypes.string,
    borderColor: PropTypes.string,
    iconColor: PropTypes.string
}

export default Badge
