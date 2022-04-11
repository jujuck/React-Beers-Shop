import React from 'react'

const Customer = ({ customer }) => {
  return (
    <div className='card shadow m-2'>
      <div className="row m-4">

        <div className="col-2">
          <img src={customer.avatar.src} alt={customer.avatar.alt} className="w-50 round" />
        </div>
        <div className="col-10">
          <p className="text-align">{customer.comment}</p>
        </div>
      </div>

    </div>
  )
}

export default Customer