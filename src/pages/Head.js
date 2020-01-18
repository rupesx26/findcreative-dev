import React from 'react';
import { Helmet } from 'react-helmet';

const Head = props => {
  return (
    <Helmet>
      <title>{props.title}</title>

      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name={props.description} content={props.content} />

      <link
        rel="shortcut icon"
        href={`${process.env.PUBLIC_URL}/favicon.ico?v1`}
      />
    </Helmet>
  );
};

export default Head;
