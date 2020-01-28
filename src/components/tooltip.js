import React from "react"
import { Tooltip as Tippy } from "react-tippy";

const Tooltip = (props) => {
  return (
    <Tippy
      title={props.title}
      arrow={true}
      duration={100}
      distance={32}
      html={(
        <span className="f6">{props.title}</span>
      )}
    >
      {props.children}
    </Tippy>
  )
}

export default Tooltip
