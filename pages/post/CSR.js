import { useEffect, useState } from "react";
import Link from "next/link";

function CSR() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h2>
        <Link href="/">
          <a>Go Back to home</a>
        </Link>
      </h2>
      <br />
      {data &&
        data.map((item) => (
          <>
            <h1>{item.name}</h1>
          </>
        ))}
    </>
  );
}

export default CSR;
