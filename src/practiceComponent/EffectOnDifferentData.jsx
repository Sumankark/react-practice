import React from 'react'

const EffectOnDifferentData = () => {
    let name = "Suman"
    let age= 23
    let isMarried = false
    let favFood = [<div>mutton</div>, <div>Chicken</div>]
    let info={address: "kathmandu", surName:"Karki"}

  return (
    <div>
        name is {name}
        <br />
        age is {age}
        <br />
        is married? {isMarried?"true":"false"}
        <br />
        favFood is {favFood[1]}
        <br />
        Surname is {info.surName}.

    </div>
  )
}

export default EffectOnDifferentData