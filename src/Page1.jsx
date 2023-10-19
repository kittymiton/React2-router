import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DatailA</Link>
      <br />
      <Link to="/page1/detailB">DatailB</Link>
      <br />
      {/* JSで遷移 */}
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
