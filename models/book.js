import { Sequelize } from "sequelize"
import { DB_URL } from "../config/config.js"

const db = new Sequelize(DB_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
});

const Book = db.define('Book', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    publishedDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
});

export { db, Book };