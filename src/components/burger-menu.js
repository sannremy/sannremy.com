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
    const baseClassName = "link lh-copy f5 no-underline ph4 pv2 db"

    const isActive = ({
      href,
      location,
    }) => {
      // Remove slashes to compare
      if (location.pathname.replace(/\//g, '') === href.replace(/\//g, '')) {
        return {
          className: `${baseClassName} fw6 bm-item-selected`
        }
      }

      return null
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
        <ul className="list pa0 mv0">
          <li>
            <NavLink
              onClick={() => this.closeMenu()}
              to="/"
              className={`${baseClassName} dark-gray bm-item-hover`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => this.closeMenu()}
              to="/resume"
              className={`${baseClassName} dark-gray bm-item-hover`}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => this.closeMenu()}
              to="/credits"
              className={`${baseClassName} dark-gray bm-item-hover`}>
              Credits
            </NavLink>
          </li>
        </ul>
      </Menu>
    )
  }
}

export default BurgerMenu
