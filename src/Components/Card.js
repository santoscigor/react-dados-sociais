import React from 'react'

const Card = (props) => {
    return <div className={`${props.className} rounded overflow-hidden shadow-lg`}>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p class="text-gray-700 text-base">
                {props.content}
            </p>

        </div>
    </div>
}

export default Card