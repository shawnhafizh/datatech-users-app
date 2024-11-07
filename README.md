# User Management App

A simple React-based web application for managing user data with CRUD functionality. This app allows users to add, edit, delete, and view user information, all while storing the data locally using localStorage. It includes a sortable table for easy viewing and interaction with user data.

## Features

- **User List**: Displays a list of users with their name, email, age, and status.
- **Sort**: Allows sorting of users by name, email, age, and status.
- **CRUD Operations**:
  - **Add**: Add a new user to the list.
  - **Edit**: Edit existing user information.
  - **Delete**: Remove a user from the list.
- **Persistent Storage**: User data is saved to localStorage so it persists between page reloads.
- **Modal Form**: A modal form is used for adding and editing users.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/datatech-users-app.git
    cd datatech-users-app
    ```

2. **Install dependencies**: If you haven't installed Node.js and npm, download them [here](https://nodejs.org/).

    Then, install the required dependencies:

    ```bash
    npm install
    ```

3. **Run the development server**: After installation is complete, start the development server:

    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to view the app.

## How it Works

### Main Component (`App.js`):

- Initializes state variables such as `users`, `formData`, `isEditing`, etc.
- Handles loading of user data from localStorage on mount using `useEffect`.
- Provides functions for adding, editing, deleting, and sorting users.
- Renders the user table (`UserTable`) and the modal form (`ModalForm`).

### User Table (`UserTable.js`):

- Displays a table with user data.
- Allows sorting by column.
- Displays action buttons to edit and delete users.

### Modal Form (`ModalForm.js`):

- A modal form used for adding new users or editing existing users.
- Contains fields for name, email, age, and status.

## Folder Structure

```bash
/src
  /components
    NavBar.js         # Navigation bar (optional, can be customized)
    UserTable.js      # Displays the user table and manages sorting/editing/deletion
    ModalForm.js      # Modal for adding and editing users
  App.js              # Main app component
  App.css             # App-level styling
  index.css           # Global styling
