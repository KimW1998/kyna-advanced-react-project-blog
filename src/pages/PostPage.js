import { useParams } from "react-router-dom";

export default function PostPage() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>{params}</h1>
      <h1>test</h1>
    </>
  );
}
