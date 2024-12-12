import React from 'react'
import ChildComponent from './ChildComponent';



const ParentComponent = () => {
    let name = "Bilal Qureshi";
    let universityName ="Karachi University";
    let department = "KUBS";
    let profession = "Financial Accountant"
    let age = 26;
  return (
    <div>
        <ChildComponent
        name={name}
        universityName={universityName}
        department={department}
        profession={profession}
        age={26}
        />
    </div>
  )
}

export default ParentComponent;