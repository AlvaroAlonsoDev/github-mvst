import UserInter from "./userInter";

export interface RepoInter {
    name: string
    description?: string
    owner: UserInter
    html_url: string
    language: string;
};

export default RepoInter;
