import React from "react"
import { Helmet } from "react-helmet"

const Meta = (props) => {
  const baseKeywords = [
    'personal website',
    'sofware',
    'engineering',
    'resume',
  ]

  let keywords = props.keywords || [];
  keywords = baseKeywords.concat(keywords)

  const description = props.description || ""
  const subject = props.subject || ""
  const topic = props.topic || ""
  const summary = props.summary || ""
  const href = props.href || "/"

  return (
    <Helmet htmlAttributes={{
      lang: "en"
    }}>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="description" content={description} />
      <meta name="subject" content={subject} />
      <meta name="language" content="en" />
      <meta name="robots" content="index,follow" />
      <meta name="revised" content="Tuesday, January 28th, 2020, 8:00 pm" />
      <meta name="topic" content={topic} />
      <meta name="summary" content={summary} />
      <meta name="author" content="Sann-Remy Chea" />
      <meta name="identifier-URL" content="https://src.onl" />
      <meta name="revisit-after" content="14 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={"https://src.onl" + href} />
    </Helmet>
  )
}

export default Meta
