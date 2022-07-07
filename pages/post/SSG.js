// import Link from "next/link";

// const SSR = ({ data }) => {
//   console.log(data);
//   return (
//     <>
//       {data.map((item) => (
//         <>
//           <h1>{item.name}</h1>
//           <h3>{item.email}</h3>
//           <br />
//         </>
//       ))}
//       <h2>
//         <Link href="/">
//           <a>Go Back to home</a>
//         </Link>
//       </h2>
//     </>
//   );
// };

// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const data = await res.json();

//   return { props: { data } };
// }

// export default SSR;

// import Link from "next/link";

// const SSG = ({ dateTime }) => {
//   console.log(dateTime);
//   return (
//     <>
//       {/* {data.map((item) => (
//             <>
//               <h1>{item.name}</h1>
//               <h3>{item.email}</h3>
//               <br />
//             </>
//           ))}
//           <h2>
//             <Link href="/">
//               <a>Go Back to home</a>
//             </Link>
//           </h2> */}
//       <h1>{dateTime}</h1>
//     </>
//   );
// };

// export async function getStaticProps() {
//   const res = await fetch(`https://worldtimeapi.org/api/ip`);
//   const response = await res.json();

//   return {
//     props: { dateTime: response.datetime },
//   };
// }

// export default SSG;

import axios from "axios";

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

// add getStaticProps() function
export async function getStaticProps() {
  // Get todo list from an API

  const res = await fetch(`https://worldtimeapi.org/api/ip`);
  const response = await res.json();
  console.log("hello");

  return {
    props: { dateTime: response.datetime },
  };
}
export default SSG;
