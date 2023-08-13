import React from 'react'

const Title = ({title, text}) => {
  return (
    <>
    {title && (<h2 className='title'>{title}</h2>)}
    {text && (<p>{text}</p>)}
    </>
  )
}

export default Title