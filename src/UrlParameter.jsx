import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // searchにhookのsearchに?以降の文字列が入ってくる
  const { search } = useLocation();
  // ?以降の文字列を引数として渡す
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメータは{id}です</p>
      {/* getで値取得 */}
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
