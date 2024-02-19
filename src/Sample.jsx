import React from 'react'
import PropTypes from 'prop-types'

function Sample(props) {
    const fruits =['apple','banana','pineapple']
    const f=fruits.map(fruits=> <li>{fruits}</li>)
    console.log(f);
  return (
    <div>
      {props.data}
      
    </div>
  )
}
Sample.propTypes ={data:PropTypes.number}
Sample.defaultProps = {data : 40}

export default Sample
