export const getUser = async (user: string) => {
    const response = await fetch(`http://api.github.com/users/${user}`);
    const data = await response.json();
    return data;
}

export const getReposUser = async (url: string) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
}