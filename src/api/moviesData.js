export async function MoviesData() {
  const resp = await fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': 'd75ca3b557msh77cbb2ee688493cp182509jsnc99fc2e287c4',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    },
  });
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("fetch users error");
}
