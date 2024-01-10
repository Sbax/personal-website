import React from "react";
import { Helmet } from "react-helmet";
import { Redirect, Route, Switch } from "wouter";
import Extra from "./components/Extra.js";
import Main from "./components/Main.js";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme";

function App() {
  const getAge = (year, month, day) => {
    const birthday = new Date(year, month - 1, day);
    const today = new Date();

    const reachedBirthday =
      today.getMonth() < birthday.getMonth() ||
      (today.getMonth() === birthday.getMonth() &&
        today.getDate() < birthday.getDate());

    const age =
      today.getFullYear() - birthday.getFullYear() + (reachedBirthday ? -1 : 0);

    return age;
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
      <Switch>
        <Route
          path="/"
          component={() => <Main title={title} description={description} />}
        />
        <Route path="/more" component={Extra} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}

export default App;
