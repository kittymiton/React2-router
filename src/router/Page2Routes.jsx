import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// Page2配下の画面遷移設定　　それぞれのページを設定しているオブジェクトの配列を持つ
export const Page2Routes = [
  { path: "/", exact: true, children: <Page2 /> },
  { path: "/:id", exact: false, children: <UrlParameter /> } // :URLパラメータとしてidという名前で受け取る
];
