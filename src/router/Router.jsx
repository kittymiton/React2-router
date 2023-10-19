import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Switch>
      {/* exact初期値true完全一致指定 ルートマッチさせる */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {/* routeにそれぞれ異なる値が入ってくる */}
            {Page1Routes.map((route) => (
              <Route
                key={route.path} // 1
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {/* childrenをレンダリング */}
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {/* routeにそれぞれ異なる値が入ってくる */}
            {Page2Routes.map((route) => (
              <Route
                key={route.path} // 1
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {/* childrenをレンダリング */}
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
