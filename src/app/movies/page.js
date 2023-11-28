import { log } from "console";

async function getMovies() {
  let res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API}`
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // log(res.json());
  return res.json();
}

async function Trending() {
  let { results } = await getMovies();
  // console.log(results);
  return (
    <div>
      <h3>Movies</h3>
      {results &&
        results.map((index) => {
          // console.log(index.id);
          return <li key={index.id}>{index.title}</li>;
        })}
    </div>
  );
}
export default Trending;