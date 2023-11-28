import { log } from "console";
import { Spinner } from "flowbite-react";

async function getMovies() {
  let res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API}`
  );
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // log(res.json());
  return res.json();
}

async function Trending() {
  let { results } = await getMovies();
  // console.log(results);
  return (
    <div>
      <h3>Movies</h3>
      {/* <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
        <span>Big text</span>
        <Spinner size='xs' className="spinner-period" />
        <Spinner size='xs' className="spinner-period" />
        <Spinner size='xs' className="spinner-period" />
      </h1> */}
      {results &&
        results.map((index) => {
          // console.log(index.id);
          return <li key={index.id}>{index.title}</li>;
        })}
    </div>
  );
}
export default Trending;