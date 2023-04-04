import express from "express"
import { bookControllers } from "./controllers/bookControllers.js"

const router = express.Router();

router.get('/', bookControllers.getAll)

router.get('/:id', bookControllers.getById)

router.post('/', bookControllers.createBook)

router.put('/:id', bookControllers.updateBook)

router.delete('/:id', bookControllers.deleteBook)

export { router };
