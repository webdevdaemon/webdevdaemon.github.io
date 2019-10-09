import React, {useState} from 'react'
import useInterval from '@use-it/interval'

const LoopList = ({list = [], interval = 2000, render = null, ...props}) => {
  const [index, setIndex] = useState(0)
  const [int, setInt] = useState(interval)

  useInterval(() => {
    if (index+1 >= list.length) return setIndex(0)
    let _index = Number(index) + 1
    setIndex(_index)
  }, int)

  return (
    render instanceof Function ? (
      render(list[index])
    ) : (
      <>{list[index]}</>  
    )
  )
}

export default LoopList