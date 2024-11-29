import Header from "../components/Header"
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useState } from "react";

export default function Home() {

    const [auth, setAuth] = useContext(AuthContext);
    const [password, setPassword] = useState();
    const [wrong, setWrong] = useState(false);

const singIn = () => {
        if(password === 'secret') {
            setAuth(true);
        } else {
            setWrong(true);
        }

        setPassword('');
    };

    const singOut = () => {
        setAuth(false);
    };

    return (
        <>
            <Header title="Home"/>
            <div className="flex flex-col gap-4 m-16">
                {wrong ? 
                    <p className="bg-red-600 text-white p-4 rounded-xl w-1/4">
                        You entered the wrong password. Please try again.
                    </p>
                    : null
                }
                <h1 className="text-4xl font-semibold">Want to see more? You are currently {auth ? 'signed in' : 'signed out'}</h1>
                <p>
                    Enter the password below to access protected content
                </p>
                <input onChange={(e) => setPassword(e.target.value)} className="border-2 border-gray-300 outline-none w-1/4" placeholder="password" type="password"></input>
                <button onClick={singIn} className="bg-rose-500 text-white p-2 w-1/4">Sign in</button>
                <button onClick={singOut} className="bg-rose-500 text-white p-2 w-1/4">Sign out</button>
            </div>
        </>
);
}