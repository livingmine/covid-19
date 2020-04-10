import React from 'react'
import PropTypes from 'prop-types'

function Card({ children, cardTitle, casesCumulative }) {
    return(
        <div className="sm:w-1/2 md:w-2/5 lg:w-2/4 xl:w-1/4 h-40 bg-white m-2 px-2 rounded-md shadow-lg">
            <div className="w-full flex h-auto pt-2">
                <div className="w-6/12 pl-2">
                    <div className="flex flex-col max-w-full">
                        <p className="text-gray-600 text-sm tracking-wider uppercase">{cardTitle}</p>
                        <div className="flex flex-row">
                            <p className="text-3xl font-bold">{casesCumulative}</p>
                            <div className="w-4 h-4 mt-3 pt-1 pl-1">
                                <svg className="w-4 h-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-6/12">
                    {children[0]}
                </div>
            </div>
            <div className="h-auto">
                {children[1]}
            </div>
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    cardTitle: PropTypes.string.isRequired,
    casesCumulative: PropTypes.number.isRequired
}

export default Card