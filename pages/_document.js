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
        <meta name="image" property="og:image" content="blob:https://vercel.com/e340642f-861f-4e99-b971-b9c8f622a12a"></meta>
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
