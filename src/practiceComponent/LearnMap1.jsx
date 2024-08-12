import React from 'react'

const LearnMap1 = () => {
    let name = ["ram", "hari", "sita"]

    let printNames = () =>{
        let list = name.map((item, i) =>{
            return <div>My best friend is {item}</div>
        })
        return list
    }

  return (
    <div>
        {printNames()}
    </div>
  )
}

export default LearnMap1