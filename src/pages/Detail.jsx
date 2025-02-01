import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const datas = [
    { id: 1, text: "리액트 입문한지 일주일 조금 넘었는데...🙂" },
    { id: 2, text: "벌써 리액트 숙련이래요..🤔" },
    { id: 3, text: "심화때는 무슨일이 벌어지는거죠? 🫥" },
  ];
  const param = useParams();
  console.log("Detail: ", param.id);

  return (
    <>
      <h1>Detail</h1>
      <Link to="/">Home으로</Link>
      <ul>
        {datas.map((data) => {
          return (
            <li key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <span>{data.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Detail;
