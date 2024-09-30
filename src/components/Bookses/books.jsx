import React, { useEffect, useState } from 'react';
import './books.css';


const booksData =
    [
        { id: 1, photo: "src/components/Bookses/modernApproach.jpeg", title: 'Artificial Intelligence - A Modern Approach', author: 'Stuart Russell; Peter Norvig', category: 'AI' },
        { id: 2, photo: "src/components/Bookses/OIP (1).jpg", title: 'Data Structures and Algorithms', author: 'Michael T. Goodrich; Roberto Tamassia; Michael H. Goldwasser', category: 'AI' },
        { id: 3, photo: "src/components/Bookses/R.jpg", title: 'Systems Analysis and Design', author: 'Alan Dennis; Barbara Haley Wixom; Roberta M. Roth', category: 'System' },
        { id: 4, photo: "src/components/Bookses/liam-drinan-4fxe7QcXg20-unsplash.jpg", title: 'Computer Networks: A Top-Down Approach', author: 'James F. Kurose; Keith W. Ross', category: 'System' },
        { id: 5, photo: "src/components/Bookses/R.jpg", title: 'Artificial Intelligence - A Modern Approach', author: 'Stuart Russell; Peter Norvig', category: 'AI' },
        { id: 6, photo: "src/components/Bookses/OIP.jpg", title: 'Data Structures and Algorithms', author: 'Michael T. Goodrich; Roberto Tamassia; Michael H. Goldwasser', category: 'AI' },
        { id: 7, photo: "src/components/Bookses/OIP.jpg", title: 'Systems Analysis and Design', author: 'Alan Dennis; Barbara Haley Wixom; Roberta M. Roth', category: 'System' },
        { id: 8, photo: "src/components/Bookses/OIP.jpg", title: 'Computer Networks: A Top-Down Approach', author: 'James F. Kurose; Keith W. Ross', category: 'System' },
        { id: 9, photo: "src/components/Bookses/OIP.jpg", title: 'Artificial Intelligence - A Modern Approach', author: 'Stuart Russell; Peter Norvig', category: 'AI' },
        { id: 10, photo: "src/components/Bookses/OIP.jpg", title: 'Data Structures and Algorithms', author: 'Michael T. Goodrich; Roberto Tamassia; Michael H. Goldwasser', category: 'AI' },
        { id: 11, title: 'Systems Analysis and Design', author: 'Alan Dennis; Barbara Haley Wixom; Roberta M. Roth', category: 'System' },
        { id: 12, title: 'Computer Networks: A Top-Down Approach', author: 'James F. Kurose; Keith W. Ross', category: 'Computer' },
        { id: 13, title: 'Artificial Intelligence - A Modern Approach', author: 'Stuart Russell; Peter Norvig', category: 'AI' },
        { id: 14, title: 'Data Structures and Algorithms', author: 'Michael T. Goodrich; Roberto Tamassia; Michael H. Goldwasser', category: 'Data' },
        { id: 15, title: 'Systems Analysis and Design', author: 'Alan Dennis; Barbara Haley Wixom; Roberta M. Roth', category: 'System' },
        { id: 16, title: 'Computer Networks: A Top-Down Approach', author: 'James F. Kurose; Keith W. Ross', category: 'Computer' },
        { id: 17, title: 'Artificial Intelligence - A Modern Approach', author: 'Stuart Russell; Peter Norvig', category: 'AI' },
        { id: 18, title: 'Data Structures and Algorithms', author: 'Michael T. Goodrich; Roberto Tamassia; Michael H. Goldwasser', category: 'Data' },
        { id: 19, title: 'Systems Analysis and Design', author: 'Alan Dennis; Barbara Haley Wixom; Roberta M. Roth', category: 'System' },
        { id: 20, title: 'Computer Networks: A Top-Down Approach', author: 'James F. Kurose; Keith W. Ross', category: 'Computer'},
        { id: 21, title: 'Data Structures and Algorithms', author: 'Michael T. Goodrich; Roberto Tamassia; Michael H. Goldwasser', category: 'Data' },
        { id: 22, title: 'Systems Analysis and Design', author: 'Alan Dennis; Barbara Haley Wixom; Roberta M. Roth', category: 'System' },
        { id: 23, title: 'Computer Networks: A Top-Down Approach', author: 'James F. Kurose; Keith W. Ross', category: 'Computer'},
        { id: 24, title: 'Artificial Intelligence - A Modern Approach', author: 'Stuart Russell; Peter Norvig', category: 'AI' },
        { id: 25, title: 'Data Structures and Algorithms', author: 'Michael T. Goodrich; Roberto Tamassia; Michael H. Goldwasser', category: 'AI' },
        { id: 26, title: 'Systems Analysis and Design', author: 'Alan Dennis; Barbara Haley Wixom; Roberta M. Roth', category: 'System' },
        { id: 27, title: 'Computer Networks: A Top-Down Approach', author: 'James F. Kurose; Keith W. Ross', category: 'Computer' },
        { id: 28, title: 'Artificial Intelligence - A Modern Approach', author: 'Stuart Russell; Peter Norvig', category: 'AI' },
        { id: 29, title: 'Data Structures and Algorithms', author: 'Michael T. Goodrich; Roberto Tamassia; Michael H. Goldwasser', category: 'AI' },
        { id: 30, title: 'Systems Analysis and Design', author: 'Alan Dennis; Barbara Haley Wixom; Roberta M. Roth', category: 'System' }
    ];

function Book({ book }) {
    const handleClick = () => {
        window.location.href = "https://people.engr.tamu.edu/guni/csce421/files/AI_Russell_Norvig.pdf"; // Replace this with your Google PDF link
      };
    return (
        
            <div onClick={handleClick}  className="book">
                <div className='book-photo'>
                    <img src={book.photo} alt="" />
                </div>
                <div className='book-details-download'>
                    <div>
                    </div>  <h3 id='books-icon'> {book.title}</h3>
                    <p>{book.author}</p>
                    <div className="download">
                        <button className='down-button'> Download</button>
                    </div>
                </div>

            </div>
     

    );
}

function Books() {
    useEffect(()=>{
         console.log("begining");
    },[]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const booksPerPage = 10;

    const totalPages = Math.ceil(
        booksData
            .filter(
                (book) =>
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                    (categoryFilter === '' || book.category === categoryFilter)
            )
            .length / booksPerPage
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handleCategoryFilter = (category) => {
        setCategoryFilter(category);
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const visibleBooks = booksData
        .filter(
            (book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (categoryFilter === '' || book.category === categoryFilter)
        )
        .slice(startIndex, endIndex);

    return (
        <div className="library">

            <div className="search-container">

                <div className='title'>
                    <h1>Which book do you need study materials for?</h1>
                    <p>Search for a book and find study material about it</p>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search books"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    {searchTerm === '' && (
                        <button className="search-button">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    )}

                    {searchTerm && (
                        <button className="clear-button" onClick={() => setSearchTerm('')}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    )}
                </div>

            </div>
            <div className="content">

                <div id='popular'>
                    <h1>Most Popular Books</h1>
                </div>
                <div className="books">
                    {visibleBooks.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
                <div className="sidebar">
                    <h2>Categories</h2>
                    <ul>
                        <li onClick={() => handleCategoryFilter('')}>All</li>
                        <li onClick={() => handleCategoryFilter('AI')}>AI</li>
                        <li onClick={() => handleCategoryFilter('Data')}>
                           Data
                        </li>
                        <li onClick={() => handleCategoryFilter('System')}>System</li>
                        <li onClick={() => handleCategoryFilter('Computer')}>
                        Computer
                        </li>

                    </ul>
                </div>
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <span className="page-number">{currentPage}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <i class="fa-sharp fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Books;
