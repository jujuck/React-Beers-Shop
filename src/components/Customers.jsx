import React from 'react';

import Avatar from './Avatar';

const Customers = ({ customer }) => {
  console.log(customer)
  return (
    <section id="customer">
      <h2 className="text-center m-4">{customer.title}</h2>
      <div className="container">
        {customer.items.map(item => <Avatar customer={item} key={item.avatar.alt} />)}
      </div>
    </section>
  )
}

export default Customers