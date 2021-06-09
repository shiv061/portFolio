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
        <meta property='og:title' content='Shivansh Singh'/>
        <meta property='og:image' content='/githubScreen.png'/>
        <meta property='og:description' content='Build Using Next.js'/>
        <body className="font-hind">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
