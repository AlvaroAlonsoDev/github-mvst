// Import necessary modules from React and MUI
import UserInter from "../../../interfaces/userInter";
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

// Define types for Props
interface Props {
    user: UserInter | null;
    filterRepos: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Define a component named ReposSearchBar
export const ReposSearchBar = (props: Props) => {
    const { user, filterRepos } = props; // Destructure user and filterRepos from props

    return (
        <>
            {/* Conditionally render search bar if user is not null */}
            {!!user && (
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
                </div>
            )}
        </>
    )

}
