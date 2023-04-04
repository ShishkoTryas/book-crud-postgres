import { Book } from "../models/book.js"

const bookControllers = {}

bookControllers.getAll = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

bookControllers.getById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.json(book);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

bookControllers.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

bookControllers.updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            const updatedBook = await book.update(req.body);
            res.json(updatedBook);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

bookControllers.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            await book.destroy();
            res.json({ message: 'Book deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export { bookControllers };