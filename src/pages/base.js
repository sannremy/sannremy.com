import React from "react"

class Base extends React.Component {
  constructor(pageName, props) {
    super(props)

    const {
      meta,
      page,
    } = this.props.data[pageName + "Yaml"]

    this.pageName = pageName
    this.page = page
    this.meta = meta

    this.state = {
      isMounted: false,
    }
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
  }
}

export default Base
