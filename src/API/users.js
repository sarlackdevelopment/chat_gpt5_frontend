export const getUsers = async () => {
    try {
        const response = await fetch('http://localhost:5094/User/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('getting users error:', error.message);
        throw new Error(`REQUEST FAILED! ${error.message}`);
    }
}

export const addUser = async (data) => {
    try {
        await fetch('http://localhost:5094/User/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.log('add user error:', error.message);
        throw new Error(`REQUEST FAILED! ${error.message}`);
    }
}
