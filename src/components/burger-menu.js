import React from "react"
import { push as Menu } from "react-burger-menu"
import { Link } from "gatsby"

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }

    this.links = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ]
  }

  componentDidMount() {
    console.log(links);
    for (const link of links) {
      console.log(link.to);
    }
  }

  closeMenu() {
    this.setState({
      menuOpen: false
    })
  }

  handleStateChange(state) {
    this.setState({
      menuOpen: state.isOpen
    })
  }

  render() {
    return (
      <Menu
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        bodyClassName="bm-burger-is-opened"
        onStateChange={(state) => this.handleStateChange(state)}
        isOpen={this.state.menuOpen}
      >
        <ul className="list pl0 mv0">
          <li>
            <Link ref={this.links[0]} onClick={() => this.closeMenu()} to="/" className="lh-copy f5 no-underline ph4 pv2 db dark-gray hover-white hover-bg-dark-gray">About</Link>
          </li>
          <li>
            <Link ref={this.links[1]} onClick={() => this.closeMenu()} to="/resume/" className="lh-copy f5 no-underline ph4 pv2 db dark-gray hover-white hover-bg-dark-gray">Resume</Link>
          </li>
          <li>
            <Link ref={this.links[2]} onClick={() => this.closeMenu()} to="/books/" className="lh-copy f5 no-underline ph4 pv2 db dark-gray hover-white hover-bg-dark-gray">Books</Link>
          </li>
        </ul>
      </Menu>
    )
  }
}

export default BurgerMenu