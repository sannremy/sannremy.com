import React from 'react'

export default class AMA extends React.Component {
  state = {
    isOpened: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpened: !!this.props.isOpened,
    }
  }

  render() {
    const {
      isOpened
    } = this.state

    return (
      <div className={isOpened ? 'block' : 'hide'}>
        lk
      </div>
    )
  }
}
