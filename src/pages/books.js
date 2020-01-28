import React from "react"
import Layout from "../components/layout"
import { AnimatedItem, AnimatedParent } from "../components/animation"
import Meta from "../components/meta"

class Books extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false
    }
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
  }

  render() {
    const {
      layoutYaml,
      booksYaml,
    } = this.props.data

    const {
      meta,
      page
    } = booksYaml

    const BookItem = ({ title, publisher, preview }) => (
      <div className="flex-auto">
        <h1 className="f6 fw6 lh-title dark-gray mv0">{title}</h1>
        <h2 className="f6 fw4 mt1 mb0 gray">{publisher}</h2>
        <a className="no-underline dark-gray link dim inline-flex items-center tc h1 mt3 mb0" href={preview}>
          <span className="f6">Preview</span>
          <svg className="dib icon pl1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#external-link" x="0" y="0" />
          </svg>
        </a>
      </div>
    )

    const BooksComponent = (
      <ul className="list pl0 mt0 center">
        {page.books.map((book, index) => {
          return (
            <li key={"book-" + index} className={"flex items-center lh-copy pv3 ph0-l" + (index + 1 === page.books.length ? "" : " bb b--black-10")}>
              <AnimatedItem>
                <BookItem {...book} />
              </AnimatedItem>
            </li>
          )
        })}
      </ul>
    )

    return (
      <Layout {...layoutYaml}>
        {/* SVG icons */}
        <svg className="dn" role="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="external-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></g>
        </svg>

        <Meta
          href="/books/"
          {...meta}
        />
        <AnimatedParent pose={this.state.isMounted ? 'open' : 'closed'}>
          <div className="center f6">
            <AnimatedItem>
              <h1 className="mt0 mb2">Books reviewed</h1>
            </AnimatedItem>
          </div>

          {BooksComponent}
        </AnimatedParent>
      </Layout>
    )
  }
}

export const query = graphql`
{
  layoutYaml {
    name
    role
  }
  booksYaml {
    meta {
      title
    }
    page {
      title
      books {
        title
        publisher
        preview
      }
    }
  }
}
`

export default Books
