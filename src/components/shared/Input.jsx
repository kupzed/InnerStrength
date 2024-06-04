import React from 'react'

const Input = ({
    label = '',
    name = '',
    type = 'text',
    className = '',
    InputClassNames = '',
    isRequired = true,
    placeholder = '',
    value = '',
    onChange = () => {},
}) => {
    return (
        <div className={`w-1/2 ${className}`}>
            <label for={name} className='block text-sm font-medium text-gray-800'>{label}</label>
            <input type={type} id={name} className={`bg-gray-5- border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${InputClassNames}`}placeholder={placeholder} 
            required={isRequired} value={value} onChange={onChange}/>
        </div>
      ) 
}
  

export default Input