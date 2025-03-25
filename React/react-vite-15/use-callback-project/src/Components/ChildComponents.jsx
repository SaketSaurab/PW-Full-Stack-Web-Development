import React from 'react'

const ChildComponents = (props) => {
    console.log('child component got re rendered again');
  return (

    <div>
      <button>
        {props.buttonName}
      </button>
    </div>
  )
}

export default ChildComponents
