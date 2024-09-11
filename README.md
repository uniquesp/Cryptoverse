# Cryptoverse

**Cryptoverse** is a cryptocurrency dashboard built with **React.js** and **Redux Toolkit**. It provides real-time data on global cryptocurrency trends, detailed individual currency info, and the latest crypto news using the **CoinRanking** and **NewsAPI**, integrated via **RapidAPI**.

## Features

- **Home Page:** Displays global cryptocurrency status values, top 10 cryptocurrencies, and the top 10 trending news articles in the crypto world.
- **Cryptocurrencies Page:** Lists all available cryptocurrencies with a powerful search functionality. Users can click on any currency card to view detailed information and an interactive chart of its trends.
- **Exchanges Page:** Premium feature showcasing cryptocurrency exchanges. This feature is only available after subscribing to the CoinRanking API.
- **News Page:** Displays the latest trending cryptocurrency news with pagination, showing 10 articles per page for easy navigation.

## UI and Functionality

- **User Interface:** Built using **Ant Design** for a modern, responsive, and clean UI.
- **State Management:** Powered by **Redux Toolkit** for efficient and scalable state management across the app.
- **APIs:**
  - **CoinRanking API** for global crypto stats, individual currency data, and exchange data (premium feature). [CoinRankingAPI](https://rapidapi.com/Coinranking/api/coinranking1)
  - **NewsAPI** for fetching the latest cryptocurrency-related news. [NewsAPI](https://rapidapi.com/news-api/api/news-api14)
- **Data Integration:** APIs are integrated via **RapidAPI** for seamless fetching and handling of real-time data.  
  [Explore RapidAPI Hub](https://rapidapi.com/hub)

## Pages

1. **Home Page:**
   - Displays global cryptocurrency status (market cap, total cryptocurrencies, exchanges, etc.).
   - Shows the top 10 cryptocurrencies with brief information.
   - Provides the top 10 trending crypto news articles.

2. **Cryptocurrencies Page:**
   - Displays a list of all available cryptocurrencies.
   - Search functionality allows users to quickly find any cryptocurrency.
   - Clicking on a crypto card displays detailed information, including a chart of its recent trends.

3. **Exchanges Page:**
   - A premium feature that provides information on cryptocurrency exchanges.
   - This page requires a subscription to access via the CoinRanking API.

4. **News Page:**
   - Shows the latest trending cryptocurrency news.
   - Powerful pagination is implemented, with 10 news articles displayed per page.

## Tech Stack

- **Frontend:** React.js, Ant Design
- **State Management:** Redux Toolkit
- **APIs:** CoinRanking API, NewsAPI (via RapidAPI)
- **Data Visualization:** Chart.js

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cryptoverse.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Create a `.env` file and add your **RapidAPI** key and **CoinRanking API** key.
4. Run the project:
   ```bash
   npm start
   ```

## Screenshots

Include some screenshots of the project here to showcase the UI and functionality.
