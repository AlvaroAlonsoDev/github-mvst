// Import necessary modules from React and @mui
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import RepoInter from '../../interfaces/RepoInter';

// Define types for Props
interface Props {
    filteredRepos: RepoInter[] // an array of repositories that have been filtered
    repos: RepoInter[] // an array of repositories to be displayed
}

// Export RepoList component which displays a list of repositories
export const RepoList = (props: Props) => {
    const { filteredRepos, repos } = props; // Destructure filteredRepos and repos from props

const redirect = (url:string) => {
    window.location.href = url;
}

    // Return a list of repositories
    return (
        <List sx={{ mt: 2 }}>
            {filteredRepos.length > 0 ? (
                // If there are filtered repositories, display them
                <div className="repo-list cursor-pointer">
                    {filteredRepos.map((e, i) => (
                        <div className='repo_single' onClick={() => redirect(e.html_url)} key={i}>
                            <ListItem alignItems="flex-start">
                                {/* When the user clicks on the avatar, log "hey" to the console */}
                                <ListItemAvatar onClick={() => console.log("hey")}>
                                    <Avatar alt={e.name} src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={!!e.owner.login ? e.name : ''}
                                    secondary={
                                        <React.Fragment>
                                            {/* Display the owner's username, the repository description, and the programming language used */}
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {!!e.owner.login ? e.owner.login : ''}
                                            </Typography>
                                            {!!e.description ? ` — ${e.description}` : ' — No description'}
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {` - ${e.language}`}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                </div>
            ) :
                // If there are no filtered repositories, display the repositories that were passed as props
                repos.map((e, i) => {
                    return (
                        <div className='repo_single cursor-pointer' onClick={() => redirect(e.html_url)} key={i}>
                            <ListItem alignItems="flex-start">
                                {/* When the user clicks on the avatar, log "hey" to the console */}
                                <ListItemAvatar onClick={() => console.log("hey")}>
                                    <Avatar alt={e.name} src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={!!e.owner.login ? e.name : ''}
                                    secondary={
                                        <React.Fragment>
                                            {/* Display the owner's username, the repository description, and the programming language used */}
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {!!e.owner.login ? e.owner.login : ''}
                                            </Typography>
                                            {!!e.description ? ` — ${e.description}` : ' — No description'}
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {` - ${e.language}`}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    )
                }
                )
            }
        </List>
    )
}
