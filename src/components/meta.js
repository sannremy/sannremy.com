import React from "react"
import { Helmet } from "react-helmet"

const Meta = (props) => {
  const baseKeywords = [
    'personal website',
    'sofware',
    'engineering',
    'sann-remy chea',
  ]

  let keywords = props.keywords || [];
  keywords = baseKeywords.concat(keywords)

  const title = props.title
  const description = props.description || ""
  const subject = props.subject || ""
  const href = props.href || "/"
  const author = "Sann-Remy Chea"

  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={title}
      titleTemplate={`%s - Sann-Remy Chea`}
      meta={[
        {
          charSet: "utf-8",
        },
        {
          name: "keywords",
          content: keywords.join(", "),
        },
        {
          name: "description",
          content: description,
        },
        {
          name: "subject",
          content: subject,
        },
        {
          name: "language",
          content: "en",
        },
        {
          name: "robots",
          content: "index,follow",
        },
        {
          name: "author",
          content: author,
        },
        {
          name: "identifier-URL",
          content: "https://src.onl",
        },
        {
          name: "revisit-after",
          content: "14 days",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
      link={[
        {
          rel: "canonical",
          href: "https://src.onl" + href,
        },
      ]}
    />
  )
}

export default Meta
