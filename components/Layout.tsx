import React, { FunctionComponent, ReactNode } from "react";
import Head from "next/head";

interface ILayoutProps {
  children?: ReactNode;
  title: string;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)


export default Layout;
