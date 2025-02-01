import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* any라고 쓴 자리가 route path에서 :id로 작성한 부분인데요, 특정페이지로 넘겨주고 싶은게 아니라면 비워두지만 않으면 이동하는 건가요?  */}
      <Link to="/detail/any"> Detail 컴포넌트로 이동</Link>
    </>
  );
};

export default Home;
