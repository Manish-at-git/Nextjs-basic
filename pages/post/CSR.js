import { useEffect, useState } from "react";
import Link from "next/link";

function CSR() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://worldtimeapi.org/api/ip`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  console.log(data);

  return (
    <>
      <h2>
        <Link href="/">
          <a>Go Back to home</a>
        </Link>
      </h2>
      <br />
      <h2>{data && data.datetime}</h2>
    </>
  );
}

export default CSR;
