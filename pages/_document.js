// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
