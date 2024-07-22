import ImgPaint from "./../assets/0001-dopo-la-pioggia-600-448.jpg";

export const getArtworkList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        return [
          {
            id: "0001",
            year: "1884",
            title: "Dopo la pioggia",
            movement: "Vedutismo siciliano",
            author: "Francesco Lojacono",
            image: "./src/assets/0001-dopo-la-pioggia-600-448.jpg",
            price: "€32.000",
            technique: "Oil on canvas",
            sizes: "cm. 49,5x65",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et iste ut odit recusandae accusantium vero, sit quis repudiandae ipsa laboriosam debitis mollitia rem veniam.",
          },
        ];
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
