import React from "react";
import { Helmet } from "react-helmet";
import Main from "./components/Main.js";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/theme.js";

function App() {
  const getAge = (year, month, day) => {
    const ms = Date.now() - new Date(year, month, day);
    const ageDateTime = new Date(ms);

    return Math.abs(ageDateTime.getUTCFullYear() - 1970);
  };

  const title = "Matteo Bacci";
  const description = `${getAge(1992, 11, 16)}yo developer from Imola, Italy`;

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme.mainBg} />
        <meta name="title" content={title} key="title" />
        <meta name="description" content={description} />

        <link rel="canonical" href={`https://mb.maletta.space/`} />

        <title>{title}</title>

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://mb.maletta.space/`} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <GlobalStyle />
      <Main title={title} description={description} />
    </>
  );
}

export default App;
