export const getMessages = async () => {
    try {
        const response = await fetch('http://localhost:5094/Chat/messages');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('getting messages error:', error.message);
        throw new Error(`REQUEST FAILED! ${error.message}`);
    }
}
