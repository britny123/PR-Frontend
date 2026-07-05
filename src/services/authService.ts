export const register = async (
    email: string,
    username: string,
    password: string
) => {
    const response = await fetch(
        "http://localhost:3000/api/auth/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                username,
                password,
            }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
    throw data;
}

    return data;
};

export const login = async (
    username: string,
    password: string
) => {
    const response = await fetch(
        "http://localhost:3000/api/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
};