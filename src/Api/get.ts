export const getUser = async (user: string, api_url: string | undefined) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    return data;
}

export const getReposUser = async (url: string) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
}