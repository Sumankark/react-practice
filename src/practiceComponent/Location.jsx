import React from 'react'

/* Make a component Location , pass props as (country, province, district, exactLocation) */
const Location = ({country, province, district, exactLocation}) => {
  return (
    <div>
        Country: {country}<br></br>
        Province: {province}<br></br>
        District: {district}<br></br>
        ExactLocation: {exactLocation}<br></br>
    </div>
  )
}

export default Location