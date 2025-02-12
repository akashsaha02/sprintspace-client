# SprintSpace – Marathon Management Platform

SprintSpace is a full-stack web application that connects runners and campaign creators with opportunities to engage, donate, and participate in events. The project is divided into two main parts:

- **Client (Frontend):** Built with React, Vite, Tailwind CSS, and other modern libraries, it provides a responsive UI for browsing marathons, viewing details, registering, and exploring campaigns.  
- **Server (Backend):** Built with Express, Node.js, and MongoDB, it manages authentication (JWT-based), event management, and registration operations via secure API endpoints.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
  - [Client Setup](#client-setup)
  - [Server Setup](#server-setup)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Event & Marathon Management:**  
  - Create, update, view, and delete events.  
  - Browse upcoming marathons along with detailed event cards that include registration dates, distances, and locations.
  
- **User Registration & Authentication:**  
  - Secure JWT-based authentication for users.  
  - Seamless registration for events with a modal form and validation.

- **Dynamic Filtering & Searching:**  
  - Filter events by type, location, date range, and search term.  
  - Interactive sorting options for marathon start dates.

- **Rich User Experience:**  
  - Responsive design with interactive animations (powered by Lottie and Typewriter effects).  
  - Integrated blog section to inspire and motivate the community.

---

## Technologies Used

**Frontend (Client):**
- React, React Router, and React Context API  
- Vite, Tailwind CSS, DaisyUI  
- Axios for API communication  
- Lottie and react-simple-typewriter for animations  
- ESLint for code quality

**Backend (Server):**
- Express.js, Node.js, and MongoDB  
- JWT for authentication and user session management  
- dotenv for environment variable configuration  
- cors and cookie-parser for secure cross-origin requests

---

## Project Structure

**Client (akashsaha02-sprintspace-client):**

```
akashsaha02-sprintspace-client/
├── public/
│   └── blogs.json
├── src/
│   ├── assets/                # Lottie animations and static assets
│   ├── components/            # UI components (Events, Event Cards, Home, etc.)
│   ├── firebase/              # Firebase configuration for hosting
│   ├── hooks/                 # Custom React hooks (e.g., useEvents)
│   ├── pages/                 # Route-based page components (HomePage, LoginPage, etc.)
│   ├── providers/             # Context providers (e.g., AuthProvider)
│   └── routes/                # Protected routes (PrivateRoute)
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── .firebaserc
```

**Server (b10a11-server-side-akashsaha02):**

```
b10a11-server-side-akashsaha02/
├── index.js                 # Main Express server for events and registrations
├── newIndex.js              # Alternative entry point for API (if needed)
├── package.json
└── vercel.json              # Vercel deployment configuration
```

---

## Installation and Setup

### Client Setup

1. **Clone the Repository**  
   Navigate to the client directory:  
   `git clone <your-repo-url>`  
   `cd akashsaha02-sprintspace-client`

2. **Install Dependencies**  
   Run:  
   ```
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file and add the following key:
   ```
   VITE_API_BASE_URL=<your-backend-api-url>
   ```

4. **Run the Development Server**  
   Start the development server with:  
   ```
   npm run dev
   ```

### Server Setup

1. **Clone the Repository**  
   Navigate to the server directory:  
   `cd b10a11-server-side-akashsaha02`

2. **Install Dependencies**  
   Run:  
   ```
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file and configure the following variables:
   - `MONGODB_URI` – MongoDB connection string  
   - `JWT_SECRET` – Secret for signing JWT tokens  
   - Optionally, set `NODE_ENV=production` for production deployment.

4. **Run the Server**  
   For development, start the server with:  
   ```
   npm start
   ```
   The server typically runs on port 3008, unless specified otherwise in your environment.

---

## API Endpoints

### Authentication
- **POST /jwt**  
  Generate a JWT token for a given user and set it as an HTTP-only cookie.

- **POST /logout**  
  Clear the authentication token.

### Events
- **GET /events**  
  Retrieve events; optionally filtered by the creator's email.

- **GET /events/details/:id**  
  Retrieve detailed information for a specific event.

- **POST /events** *(Protected)*  
  Create a new event (user must be authenticated).

- **PUT /events/:id** *(Protected)*  
  Update an existing event (authorized access required).

- **DELETE /events/:id** *(Protected)*  
  Delete an event (authorized access required).

- **GET /running-events**  
  Retrieve upcoming marathons with limit and random selection options.

### Registrations
- **GET /registrations** *(Protected)*  
  Retrieve event registrations for a user, with optional search by event title.

- **POST /registrations** *(Protected)*  
  Add a new registration and increment the event's registration count.

- **PUT /registrations/:id** *(Protected)*  
  Update an existing registration.

- **DELETE /registrations/:id** *(Protected)*  
  Delete a registration and decrement the associated event’s registration count.

---

## Deployment

- **Client:**  
  Typically deployed using Firebase Hosting (see `firebase.json` and `.firebaserc`).

- **Server:**  
  Can be deployed on platforms like Vercel using the provided `vercel.json` configuration.

---

## Contributing

Contributions are welcome! To contribute:  
- Fork the repository  
- Create a new branch with your feature or bug fix  
- Open a pull request detailing your changes and improvements  
- For major changes, please open an issue first to discuss the enhancements

---

## License

This project is licensed under the MIT License.

---

SprintSpace combines a powerful frontend with a robust backend to deliver an engaging user experience for marathon enthusiasts and campaign supporters alike. Enjoy contributing and exploring this dynamic platform!
