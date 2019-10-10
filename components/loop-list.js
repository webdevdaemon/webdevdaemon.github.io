import React, { useState } from 'react'
import useInterval from '@use-it/interval'

const LoopList = ({ list = [], interval = 4000, render = null, ...props }) => {
  const [index, setIndex] = useState(0)
  const [int, setInt] = useState(interval)
  const [visible, setVisible] = useState(false)

  const fadeStyles = {
      transition: `opacity ${int / 4}ms ease-out`,
      opacity: `${visible ? 1 : 0}`,
    },
    renderProps = {
      value: list[index],
      style: { ...fadeStyles },
    }

  useInterval(() => {
    setVisible(true)
    setTimeout(() => setVisible(true), 0)
    setTimeout(() => setVisible(false), (int / 4) * 3)
    if (index + 1 >= list.length) return setIndex(0)
    let _index = Number(index) + 1
    setIndex(_index)
  }, int)

  return render instanceof Function ? (
    <>{render(renderProps)}</>
  ) : (
    <p style={{ ...fadeStyles }}>{list[index]}</p>
  )
}

export default LoopList
