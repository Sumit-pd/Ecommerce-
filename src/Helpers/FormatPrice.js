import React from 'react'

const FormatPrice = ({ price }) => {
    return (
        <div>
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'  , maximumFractionDigits : 2}).format(price/100)}
        </div>
    )
}

export default FormatPrice
