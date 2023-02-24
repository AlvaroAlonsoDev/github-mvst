// Import necessary modules from React and other dependencies
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Define types for Props
interface Props {
    setSearchTerm: (searchTerm: string) => void; // callback function to set the search term
    controlSearch: () => void; // callback function to trigger the search
    err: boolean; // boolean value indicating whether there is an error in the search
}

export const UserSearchBar = (props: Props) => {
    const { setSearchTerm, controlSearch, err } = props;
    
    return (
        <div>
            {!!err ? ( // If there is an error, display this section
                <div className='grid-center'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                        <TextField
                            error
                            name='search'
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect username."
                            variant="standard"
                            onChange={(e) => setSearchTerm(e.target.value)} // set the search term on change
                        />
                        {/* trigger search on button click */}
                        <Button onClick={controlSearch} type='submit' variant="text"><SearchIcon /></Button> 
                    </Box>
                </div>
            ) : ( // If there is no error, display this section
                <div className='grid-center'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                        {/* set the search term on change */}
                        <TextField onChange={(e) => setSearchTerm(e.target.value)} type={'text'} name='search' label="GitHub username" variant="standard" />
                        {/* trigger search on button click */}
                        <Button onClick={controlSearch} type='submit' variant="text"><SearchIcon /></Button> 
                    </Box>
                </div>
            )}
        </div>
    )
    
}
