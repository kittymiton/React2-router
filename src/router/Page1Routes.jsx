import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

// Page1配下の画面遷移設定　　それぞれのページを設定しているオブジェクトの配列を持つ
export const Page1Routes = [
  { path: "/", exact: true, children: <Page1 /> },
  { path: "/detailA", exact: false, children: <Page1DetailA /> },
  { path: "/detailB", exact: false, children: <Page1DetailB /> }
];
