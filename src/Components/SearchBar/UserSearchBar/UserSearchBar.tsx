// Import necessary modules from React and other dependencies
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
// Define types for Props
interface Props {
    setSearchTerm: (searchTerm: string) => void; // callback function to set the search term
    controlSearch: () => void; // callback function to trigger the search
    err: boolean; // boolean value indicating whether there is an error in the search
}
interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> { }


export const UserSearchBar = (props: Props) => {
    const { setSearchTerm, controlSearch, err } = props;

    const searchUser = (event: FormSubmitEvent) => {
        event.preventDefault();
        controlSearch()
    }
    return (
        <div>
            {!!err ? ( // If there is an error, display this section
                <div className='grid-center'>
                    <form onSubmit={(event) => searchUser(event)} id="my-form-user">
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            {/* set the search term on change */}
                            <TextField id="input-with-sx" onChange={(e) => setSearchTerm(e.target.value)} error label="Error" helperText="Incorrect username." variant="standard" />
                        </Box>
                    </form>
                </div>
            ) : ( // If there is no error, display this section
                <div className='grid-center'>
                    <form onSubmit={(event) => searchUser(event)} id="my-form-user">
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            {/* set the search term on change */}
                            <TextField id="input-with-sx" onChange={(e) => setSearchTerm(e.target.value)} label="Search GitHub username" variant="standard" />
                        </Box>
                    </form>
                </div>
            )}
        </div>
    )

}
