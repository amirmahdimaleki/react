# Movie Search App
Welcome to the Movie Search App homework project! In this project, you'll be building a React app that allows users to search for movies, view trending movies, and see detailed information about each movie.

## Getting Started
Follow the steps below to complete the project:

### 1. Set Up Your Environment
Make sure you have Node.js and npm installed on your computer. You'll also need a text editor to write your code.

### 2. Clone the Starter Code
Clone the starter code provided for this project from the repository.

bash
Copy code
git clone <repository_url>
### 3. Install Dependencies
Navigate to the project directory and install the required dependencies using npm.

bash
Copy code
cd movie-search-app
npm install
### 4. Obtain API Key
You'll need an API key from The Movie Database (TMDb) to fetch movie data. Sign up for an account on the TMDb website and obtain your API key.

### 5. Update API Key
Replace 'YOUR_TMDB_API_KEY' with your actual TMDb API key in the code files where indicated.

### 6. Complete the Tasks
Follow the tasks outlined in the README to complete the project. You'll be implementing features such as:

Displaying trending movies on the main page
Implementing a search bar to search for movies
Creating custom routes to display movie details
And more!
### 7. Test Your App
Test your app thoroughly to ensure all features are working as expected. Use different search queries and verify that the correct movies are displayed.

### 8. Submit Your Work
Once you've completed the project, submit your work according to the instructions provided by your instructor.

### Additional Resources
* React Documentation
* React Router Documentation
* Redux Toolkit Documentation
* The Movie Database API Documentation


The code :
your folder structure:
movie-search-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── MovieList.js
│   │   ├── MovieDetails.js
│   │   ├── SearchBar.js
│   │   └── ...
│   ├── redux/
│   │   ├── movieSlice.js
│   │   └── store.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md

> public/: Contains the static files for the application, such as HTML files.
> index.html: The main HTML file that serves as the entry point for the React application.
> src/: Contains the source code for the application.
> components/: Contains React components used in the application.
> MovieList.js: Component for displaying a list of movies.
> MovieDetails.js: Component for displaying details about a specific movie.
> SearchBar.js: Component for searching movies.
> redux/: Contains Redux-related files.
> movieSlice.js: Redux slice for managing movie-related state and actions.
> store.js: Redux store configuration.
> App.js: Main component that renders the application.
> index.js: Entry point of the application.
