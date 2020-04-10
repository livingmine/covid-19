import React from 'react'
import PropTypes from 'prop-types'

function Wrapper({ children }) {
    return(
        <div className="w-full bg-gray-200 h-auto mt-4 mx-auto py-4">
            <div className="flex flex-col lg:flex-row justify-center items-center">
                {children}
            </div>
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Wrapper