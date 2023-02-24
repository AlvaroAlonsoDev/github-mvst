// Import necessary modules from React and MUI
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import RepoInter from "../../../interfaces/RepoInter";

// Define types for Props
interface Props {
    filterRepos: (event: React.ChangeEvent<HTMLInputElement>) => void
    filteredRepos: RepoInter[];
    searchRepo: String;
}

// Define a component named ReposSearchBar
export const ReposSearchBar = (props: Props) => {
    const { filterRepos, filteredRepos, searchRepo } = props; // Destructure user and filterRepos from props


    return (
        <div>
            {/* Conditionally render search bar if user is not null */}
            {
                !!filteredRepos.length === false && !!searchRepo ? (
                    <div className='grid-center'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                            <TextField
                                error
                                name='search'
                                label="Error"
                                defaultValue="Search Repositories"
                                helperText="Repository not found."
                                variant="standard"
                                onChange={filterRepos}
                            />
                        </Box>
                    </div>
                ) : (
                    <div className='grid-center'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                            {/* Text field to allow searching for repositories */}
                            <TextField
                                onChange={filterRepos}
                                type={'text'}
                                name='search'
                                label="Search Repositories"
                                variant="standard"
                            />
                        </Box>
                    </div >
                )
            }

        </div >
    )

}
