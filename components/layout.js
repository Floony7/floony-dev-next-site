import Head from "next/head"

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title + " | Floony Web Dev"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" />
      </Head>
      <header>
        <h1>Floony Dev</h1>
      </header>
      <div>{children}</div>
      <footer>
        <p>Copyright {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default Layout
