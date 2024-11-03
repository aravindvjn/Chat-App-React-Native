import { authURL } from "../../Global/Links/Links";
import AsyncStorage from '@react-native-async-storage/async-storage';

const handleSubmit = async (input, page) => {
    try {
        const url = page === "Register" ? 'register' : 'login';
        console.log(authURL + url);
        const response = await fetch(authURL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        const data = await response.json();

        if (response.ok) {
            await AsyncStorage.setItem("token", data.token);
            return { status: true, data: data };
        } else {
            return { status: false, message: data.message };
        }

    } catch (err) {
        console.error("Error in Auth.", err);
        return { status: false, message: "Server not responding." };
    }
}

export default handleSubmit;
