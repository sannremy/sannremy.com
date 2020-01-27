import React from "react"
import { push as Menu } from "react-burger-menu"
import { Link } from "gatsby"

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
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
    const baseClassName = "h-copy f5 no-underline ph4 pv2 db"
    const isActive = ({
      isCurrent
    }) => {
      return isCurrent ? { className: `${baseClassName} white bg-gray` } : null
    }

    const NavLink = props => (
      <Link
        getProps={isActive}
        {...props}
      />
    )

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
            <NavLink
              onClick={() => this.closeMenu()}
              to="/"
              className={`${baseClassName} dark-gray hover-white hover-bg-dark-gray`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => this.closeMenu()}
              to="/resume"
              className={`${baseClassName} dark-gray hover-white hover-bg-dark-gray`}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => this.closeMenu()}
              to="/books"
              className={`${baseClassName} dark-gray hover-white hover-bg-dark-gray`}>
              Books
            </NavLink>
          </li>
        </ul>
      </Menu>
    )
  }
}

export default BurgerMenu