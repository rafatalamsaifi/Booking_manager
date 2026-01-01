## 🚀 Getting Started

This is the **Booking Manager Application**, a backend service responsible for handling booking creation, validation, and data persistence.

---

## ✅ Prerequisites

Make sure the following are installed on your local machine:

- **Node.js**
- **npm**

---

## 🧩 Versions Used in This Project

- **Node.js**: `v22.14.0`
- **npm**: `v10.9.2`

---

## 📥 Clone the Repository

```bash
git clone <repo-link>
cd backend

## 🔐 Environment Configuration

Create a `.env` file in the project root and add the required environment variables (database credentials, port, etc.) before running the server.

.env.example

DB_NAME=exmaple
DB_USERNAME=example
DB_PASSWORD=example
DB_HOST=example
port=example

---

## 📦 Installation and Running the Server

```bash
# install dependencies
npm install

# start the server
npm start

# create a migration file (example)
npx sequelize-cli migration:generate --name create-bookings

# run migrations
npx sequelize-cli db:migrate

# undo last migration
npx sequelize-cli db:migrate:undo
