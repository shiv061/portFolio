import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <meta property="og:title" content="Shivansh Singh" />
        <meta name="description" property="og:description" content="Built Using Next.js"></meta>
        <meta name="image" property="og:image" content="https://i.ibb.co/Q87CL1J/Screenshot-2021-06-21-at-12-09-14-PM.png"></meta>
        <meta name="author" content="Shivansh Singh"></meta>
        <body className="font-hind">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
