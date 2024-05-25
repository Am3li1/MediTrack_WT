#MediTrack_MERN

# MediTrack_MERN

MediTrack_MERN is a web application designed to store and manage medical records of donor patients, accessible by doctors. This application leverages the MERN stack (MongoDB, Express.js, React.js, and Node.js) for full-stack development.

## Installation

Ensure you have Node.js and MongoDB (either Compass or Atlas) installed on your machine. You can download them from their respective websites.

## Project Structure

The project is divided into two main folders:
1. **frontend**: Contains the React.js code for the user interface.
2. **backend**: Contains the Express.js code for the server and API.

## Dependencies

### Backend
Navigate to the `backend` directory and install the required dependencies:
```bash
cd backend
npm install express nodemon mongoose cors
```

### Frontend
Navigate to the `frontend` directory and install the required dependencies:
```bash
cd frontend
npm install
npm install react-router-dom axios react-icons
```

## Running the Application

To run the application, follow these steps:

1. **Backend**: Open a terminal, navigate to the `backend` directory, and start the server:
    ```bash
    cd backend
    npm run dev
    ```

2. **Frontend**: Open a new terminal, navigate to the `frontend` directory, and start the React development server:
    ```bash
    cd frontend
    npm start
    ```

## Usage

Once both servers are running, you can access the application in your web browser. The frontend will typically be served at `http://localhost:3000` and the backend API at `http://localhost:5000` or the port specified in your backend configuration.

## Conclusion

This README provides a quick overview of setting up and running the MediTrack_MERN application. For detailed documentation on the application’s features and code, please refer to the respective folders and their documentation. If you encounter any issues or have questions, feel free to open an issue or contact the project maintainers.
