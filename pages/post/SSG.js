const SSG = ({ dateTime }) => {
  console.log(dateTime);
  return (
    <>
      <div>
        <h1>Todos</h1>
        <ul>{dateTime}</ul>
      </div>
      <h2>
        <Link href="/">
          <a>Go Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://worldtimeapi.org/api/ip`);
  const response = await res.json();
  console.log("hello");

  return {
    props: { dateTime: response.datetime },
  };
}
export default SSG;
