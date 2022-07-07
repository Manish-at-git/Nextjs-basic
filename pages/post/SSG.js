import Link from "next/link";

const SSG = ({ dateTime }) => {
  console.log(dateTime);
  return (
    <>
      <h2>
        <Link href="/">
          <a>Go Back to home</a>
        </Link>
      </h2>
      <div>
        <h1>{dateTime}</h1>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://worldtimeapi.org/api/ip`);
  const response = await res.json();

  return {
    props: { dateTime: response.datetime },
    revalidate: 10,
  };
}
export default SSG;
