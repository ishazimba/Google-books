export const getbooks = () => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const book = data.items;
      //console.log(book[0].volumeInfo.title); // Log the received items array
      return book || [];
    });
};
