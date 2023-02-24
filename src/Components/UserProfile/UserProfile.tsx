// Import necessary modules from @mui
import Button from "@mui/material/Button";
import UserInter from "../../interfaces/userInter";

// Define types for Props
interface Props {
    user: UserInter | null;
}

export const UserProfile = (props: Props) => {
    const { user } = props;

    const redirect = (url:string) => {
        window.location.href = url;
    }
    return (
        <>
            {!!user && (
                // If there is a user, display their profile
                <div className="card mt-2">
                    <img
                        className="card-img-top"
                        src="https://img.freepik.com/vector-gratis/color-blanco-fondo-degradado-abstracto-moderno_343694-2130.jpg"
                        alt="Card"
                    />
                    <div className="card-body little-profile text-center">
                        <div className="pro-img">
                            <img
                                src={
                                    // If there is a user, use their avatar URL, otherwise use a default image
                                    !!user ? user.avatar_url : "https://tse1.mm.bing.net/th?id=OIP.0g9t2RRpr0rhAKaJPbQriQHaHk&pid=Api&P=0"
                                }
                                alt="user"
                            />
                        </div>
                        <h3 className="m-b-0">
                            {!!user ? user.name : ""}
                        </h3>
                        <p>
                            {!!user ? user.login : ""}
                        </p>
                        <Button
                            className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                            variant="contained"
                            onClick={() => redirect(user.html_url)}
                        >
                            Follow
                        </Button>
                        <div className="row text-center m-t-20">
                            <div className="col-lg-4 col-md-4 m-t-20">
                                <h3 className="m-b-0 font-light">
                                    {!!user ? user.public_repos : "?"}
                                </h3>
                                <small>Repositories</small>
                            </div>
                            <div className="col-lg-4 col-md-4 m-t-20">
                                <h3 className="m-b-0 font-light">
                                    {!!user ? user.followers : "?"}
                                </h3>
                                <small>Followers</small>
                            </div>
                            <div className="col-lg-4 col-md-4 m-t-20">
                                <h3 className="m-b-0 font-light">
                                    {!!user ? user.following : "?"}
                                </h3>
                                <small>Following</small>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
