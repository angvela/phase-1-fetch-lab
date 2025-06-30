function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((bookData) => {
      renderBooks(bookData);
    });
}

function renderBooks(books) {
  const bookList = document.getElementById("books");
  bookList.innerHTML = ""; // Clear any existing content

  books.forEach((book) => {
    const li = document.createElement("li");

    // Create a readable release date
    const releaseDate = new Date(book.released).toDateString();

    li.innerHTML = `
      <strong>${book.name}</strong><br>
      <em>Author(s):</em> ${book.authors.join(", ")}<br>
      <em>Pages:</em> ${book.numberOfPages}<br>
      <em>Released:</em> ${releaseDate}
    `;

    bookList.appendChild(li);
  });
}
