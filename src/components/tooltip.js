import React from "react"
import { Tooltip as Tippy } from "react-tippy";

const Tooltip = (props) => {
  const distance = props.distance ? props.distance : 32

  return (
    <Tippy
      title={props.title}
      arrow={true}
      duration={100}
      distance={distance}
      html={(
        <span className="f6">{props.title}</span>
      )}
    >
      {props.children}
    </Tippy>
  )
}

export default Tooltip
