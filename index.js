// Called when the page loads
function fetchBooks() {
  // Return the fetch promise so tests can access it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Parse JSON into JavaScript
    .then((data) => {
      renderBooks(data); // Display the book titles
      return data; // Return for test access
    })
    .catch((err) => console.error("Fetch failed:", err));
}

// Takes an array of book objects and lists their names
function renderBooks(books) {
  const ul = document.getElementById("books");
  ul.innerHTML = ""; // Clear any existing content

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name;
    ul.appendChild(li);
  });
}

// Ensure fetchBooks runs when the HTML loads
window.addEventListener("DOMContentLoaded", fetchBooks);

