import React from 'react'

const LearnTernary = () => {
  let age =99;
  let marks=53;
  return (
    <div>
      {/* {
        age<18?<div>UnderAge</div>
        :age>=18&&age<60?<div>Adult</div>
        :<div>Old</div>
      } */}

      {
        marks<39?<div>Fail</div>
        :marks>=40&&marks<=59?<div>Third division</div>
        :marks>=60&&marks<=79?<div>First division</div>
        :marks>80&&marks<=100?<div>Distinction</div>
        :null
      }
      {/* Using ternary operator solve this
          age<18 print He canenter bar
          age>=18 print He cannot enter bar */}
      {
        age<18?<div>He can enter bar</div>
        :age>=18?<div>He cannot enter bar</div>
        :null
      }
    </div>
  )
}

export default LearnTernary