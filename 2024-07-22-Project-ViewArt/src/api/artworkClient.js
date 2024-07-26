/* export const getArtworkList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ message: "Errore bruttissimissimo" });
      resolve(() => {
        return [
          {
            id: "0001",
            title: "Dopo la pioggia",
            author: "Francesco Lojacono",
            movement: "Vedutismo siciliano",
            year: "1884",
            image: "./../src/assets/0001-dopo-la-pioggia-600-448.jpg",
            technique: "Oil on canvas",
            sizes: "cm. 49,5x65",
            price: "€32.000",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et iste ut odit recusandae accusantium vero, sit quis repudiandae ipsa laboriosam debitis mollitia rem veniam.",
          },
          {
            id: "0002",
            title: "Luce",
            author: "Lorenzo Oliva",
            movement: "Surrealismo contemporaneo",
            year: "2019",
            image: "./../src/assets/0002-Luce.jpg",
            technique: "Oil on canvas",
            sizes: "cm. 120x80",
            price: "€2.500",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et iste ut odit recusandae accusantium vero, sit quis repudiandae ipsa laboriosam debitis mollitia rem veniam.",
          },
        ];
      });
    }, 1000);
  });
}; */

/* export const getArtworkDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ message: "Errore bruttissimissimo" }); 
      resolve(() => {
        return {
          id: "0001",
          year: "1884",
          title: "Dopo la pioggia",
          movement: "Vedutismo siciliano",
          author: "Francesco Lojacono",
          image: "./../src/assets/0001-dopo-la-pioggia-600-448.jpg",
          price: "€32.000",
          technique: "Oil on canvas",
          sizes: "cm. 49,5x65",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et iste ut odit recusandae accusantium vero, sit quis repudiandae ipsa laboriosam debitis mollitia rem veniam.",
        };
      });
    }, 1000);
  });
}; */

/* export const addArtwork = (body) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ...body,
        id: self.crypto.randomUUID(),
      });
    }, 2000);
  });
}; */

export const editArtwork = (body) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ...body,
      });
    }, 2000);
  });
};

//FAKE SERVER

export const getArtworkList = async () => {
  try {
    const res = await fetch("http://localhost:3000/artwork");
    console.log("res", res);
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};

export const getArtworkDetails = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/artworkDetails/${id}`);
    console.log("res", res);
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};

export const addArtwork = async (body) => {
  const id = self.crypto.randomUUID();
  const artworkHome = {
    id,
    title: body.title,
    author: body.author,
    movement: body.movement,
    year: body.year,
    image: body.image,
  };

  try {
    await fetch(`http://localhost:3000/artwork`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artworkHome),
    });

    const res = await fetch(`http://localhost:3000/artworkDetails`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...body }),
    });
    console.log("res: ", res.json());
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};
