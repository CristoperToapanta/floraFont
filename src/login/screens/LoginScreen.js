import React, { useState } from "react";
import '../../../src/App.css'
import LoginFormCard from "../components/LoginFormCard";
import { useNavigate } from "react-router-dom";

function LoginScreen({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const users = [
        { username: "admin", password: "admin123" },
        { username: "user", password: "user123" }
    ];


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(username)
        console.log(password)

        const userFound = users.find(
            (user) => user.username === username && user.password === password
        );

        if (userFound) {
            setError("");
            navigate("/dashboard");
        }
        else {
            setError("Usuario o contraseña incorrectos");
        }

    };

    return (
        <div className="login-container">
            <LoginFormCard
                handleSubmit={handleSubmit}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
             {error && <p className="error-message">{error}</p>}
        </div>
    )

}

export default LoginScreen