import React from 'react'

const Input = ({type,placeholder,name,value,className}) => {
  return (
      <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          className={className}
    

      />
  )
}

export default Input