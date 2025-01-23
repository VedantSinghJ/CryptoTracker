# CryptoTracker - Explore the World of Cryptocurrency

**CryptoTracker** is a modern, React-based web application that provides real-time insights into the cryptocurrency market. The application fetches live data through powerful APIs and visualizes it with interactive charts, offering users a sleek and informative interface to explore global crypto trends.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Real-Time Data:** Stay updated with live cryptocurrency prices and market trends.
- **Interactive Charts:** Visualize historical price trends with responsive, user-friendly charts.
- **API Integration:** Fetches data seamlessly using [RapidAPI](https://rapidapi.com).
- **State Management:** Built with Redux Toolkit for efficient and scalable state handling.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Loading Indicators:** Enhanced user experience with dynamic loading spinners.

---

## Technologies Used

- **Frontend Framework:** React.js
- **State Management:** Redux Toolkit
- **HTTP Requests:** Axios
- **Charting Library:** Chart.js (via React-Chartjs-2)
- **Utility Libraries:** Moment.js, Millify
- **Routing:** React Router

---

## Usage

To start the development server, run:
```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to access the application.

To build the project for production, run:
```bash
npm run build
```

---

## Environment Variables

Ensure you have the following variables set in your `.env` file:

- `REACT_APP_RAPIDAPI_KEY`: Your RapidAPI key for accessing cryptocurrency APIs.
- `REACT_APP_CRYPTO_API_URL`: The base URL for the crypto API.

> **Note:** Never expose your API keys publicly. Use environment variables to keep them secure.

---

## Contributing

Contributions are welcome! If you have suggestions for new features or improvements, please:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

