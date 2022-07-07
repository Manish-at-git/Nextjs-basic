import Link from "next/link";
import { useState } from "react";

const SSR = ({ data }) => {
  return (
    <>
      <h2>
        <Link href="/">
          <a>Go Back to home</a>
        </Link>
      </h2>
      <br />
      {data.map((item) => (
        <>
          <h1>{item.name}</h1>
        </>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const response = await res.json();

  return {
    props: { data: response },
  };
}

export default SSR;
