// Import necessary modules from React and other dependencies
import React, { useState } from 'react';

import { Box } from '@mui/system';
import { Container } from '@mui/material';
import { getReposUser, getUser } from './Api/get';

import { UserSearchBar } from './Components/SearchBar/UserSearchBar/UserSearchBar';
import { UserProfile } from './Components/UserProfile/UserProfile';
import { ReposSearchBar } from './Components/SearchBar/ReposSearchBar/ReposSearchBar';

import RepoInter from './interfaces/RepoInter';
import UserInter from './interfaces/userInter';
import { RepoList } from './Components/RepoList/RepoList';
import { Logo } from './Components/Logo/Logo';


// Define the main component of the app
function App() {
  const serverUrl = process.env.REACT_APP_API_SERVER;


  // Set up state variables
  const [user, setUser] = useState<UserInter | null>(null); // user state variable
  const [repos, setRepos] = useState<Array<RepoInter>>([]); // array of repos state variable
  const [searchTerm, setSearchTerm] = useState(''); // search term state variable
  const [filteredRepos, setFilteredRepos] = useState<RepoInter[]>([]); // filtered array of repos state variable
  const [err, setErr] = useState(false); // error control
  const [searchRepo, setSearchRepo] = useState(''); // value search bar repositories

  // Define function for searching for user and their repos
  const controlSearch = async () => {
    try {
      // Fetch user data from GitHub API using the search term entered by the user
      const userResponse = await getUser(searchTerm, serverUrl);
      // Fetch user's repos using their repos URL
      const reposResponse = await getReposUser(userResponse.repos_url);
      // Update state variables with the user and their repos data
      setErr(false);
      setUser(userResponse);
      setRepos(reposResponse);
    } catch (error) {
      console.error(error);
      setErr(true);
      setUser(null);
      setRepos([]);
      setFilteredRepos([]);
    }
  }

  // Define function for filtering the list of repos based on search term entered by user
  const filterRepos = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase(); // convert search term to lowercase for case-insensitive search
    setSearchRepo(searchValue)
    const filteredList = repos.filter((repo) =>
      repo.name.toLowerCase().includes(searchValue) // filter repos whose names include the search term
    );
    // Update state variable with filtered list of repos
    setFilteredRepos(filteredList);
  };

  const cleanValues = () => {
    setUser(null);
    setRepos([]);
    setFilteredRepos([]);
  }

  // Render the app UI
  return (
    <Container maxWidth="sm">
      <Box>
        {!!user ? (
          <>
            {/* Display Logo */}
            <div onClick={cleanValues}>
              < Logo />
            </div>
            {/* Search for user */}
            < UserSearchBar setSearchTerm={setSearchTerm} controlSearch={controlSearch} err={err} />
            {/* Profile information */}
            <UserProfile user={user} />
            {/* Search for repositories */}
            <ReposSearchBar filterRepos={filterRepos} filteredRepos={filteredRepos} searchRepo={searchRepo} />
            {/* Repositories */}
            <RepoList repos={repos} filteredRepos={filteredRepos} />
          </>
        )

          : (
            <>
              {/* Display Logo */}
              < Logo />
              {/* Search for user */}
              < UserSearchBar setSearchTerm={setSearchTerm} controlSearch={controlSearch} err={err} />
            </>
          )}
      </Box>
    </Container>
  );
}

export default App;
