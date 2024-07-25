export const getArtworkList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* reject({ message: "Errore bruttissimissimo" }); */
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
};

export const getArtworkDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* reject({ message: "Errore bruttissimissimo" }); */
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
};

export const addArtwork = (body) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ...body,
        id: self.crypto.randomUUID(),
      });
    }, 2000);
  });
};

/* export const getBookList = async () => {
	try {

		const res = await fetch("https://jsonplaceholde.typicode.com/users");
		return res.json()

	} catch (error) {
		throw new Error("Error:", error)

	}
};  */

//const body = JSON.stringify(form);

/*     fetch("", {
      method: "POST",
      body: body,
    }); */
