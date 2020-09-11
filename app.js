const bookIdInput = document.getElementById('book-id')

bookIdInput.addEventListener('change, e =>' {
    fetchBookData(e.currentTarget.value)
})

Function fetchBookData(bookId) {
    fetch('http://localhost:8080/book.php?id=10')
        .then(res => {
            return res.json()
        })
}
    .then(book => {
    console.log(book)
})
