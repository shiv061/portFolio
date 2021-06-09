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
        <meta property='og:image' content='https://ssr.resume.tools/to-og-image/ssid-iojwP6JpA.png'/>
        <meta property='og:description' content='Built Using Next.js'/>
        <meta property="og:image:secure_url" content="https://ssr.resume.tools/to-og-image/ssid-iojwP6JpA.png" />
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <body className="font-hind">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
