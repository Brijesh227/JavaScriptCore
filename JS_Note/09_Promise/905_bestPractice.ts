export interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: {
    name: string;
    url: string;
  }[];
}

export interface Pokemon {
  id: number;
  name: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

export const getPokemonList = async (): Promise<PokemonList> => {
  const listResp = await fetch("http://localhost/api/v2/pokemon/");
  return await listResp.json();
};

export const getPokemon = async (url: string): Promise<Pokemon> => {
  const dataResp = await fetch(url);
  return await dataResp.json();
};

export const getFirstPokemon = async (): Promise<Pokemon> =>
  new Promise(async (resolve, reject) => {
    try {
      console.log("Getting the list");
      const list = await getPokemonList();
      resolve(await getPokemon(list.results[0].url));
    } catch (error) {
      reject(error);
    }
  });

// what if called twice? 
async function calledSamePromiseTwice() { 
  const pokemon = await getFirstPokemon();
  console.log(pokemon);
  const pokemon2 = await getFirstPokemon();
  console.log(pokemon2);

  // only called one time. because at first await promise is in fullfiled state and then give data from cache.
}
calledSamePromiseTwice();

// list of promises

async function listOfPromise () { 
  const pokemon = await getPokemonList();
  console.log(pokemon);

  // not working
  // pokemon.results.forEach(async (p) => {
    //   const data = await getPokemon(p.url);
    //   console.log(data);
  // });

  // working easiest
  // for(let i = 0; i < pokemon.results.length; i++) {
  //   const data = await getPokemon(pokemon.results[i].url);
  //   console.log(data);
  // }

  // working
  // for(let p of pokemon.results) {
  //   const data = await getPokemon(p.url);
  //   console.log(data);
  // }

  // working but waste of time
  // const data = pokemon.results.reduce<Promise<unknown>>(async (pr, p) => {
  //   await pr;
  //   return  getPokemon(p.url).then((data) => console.log(data.name));
  // }, Promise.resolve(undefined));

  // working
  await Promise.all(pokemon.results.map(async (p) => await getPokemon(p.url)));
}

listOfPromise();