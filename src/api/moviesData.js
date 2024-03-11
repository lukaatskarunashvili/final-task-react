export async function MoviesData() {
  const resp = await fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '331a6d0136mshbec8538ac87234ap11baf7jsn0744d1f0fc54',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    },
  });
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("fetch users error");
}
