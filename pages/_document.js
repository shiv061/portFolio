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
        <meta name="image" property="og:image" content="[https://res.cloudinary.com/dpfcrhcnj/image/upload/c_scale,w_1300/v1624258301/Screenshot_2021-06-21_at_12.09.14_PM_adx8o0.png]"></meta>
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
