// Do promise call for every element of array.

async function hello(arr) {
    return Promise.all(arr.map(async (item) => {
        return {
            fromNum: await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(item * item);
                }, item * 1000);
            })
        };
    }));
}

async function hi() {
  const h = await hello([1, 2, 3]);
  console.log(h);
}

hi();

  