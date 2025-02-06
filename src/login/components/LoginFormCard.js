import React from 'react'
import '../../App.css'

function LoginFormCard({ handleSubmit, username, setUsername, password, setPassword }) {
    return (
        <div className="login-box">

            <p className='p-login-title'>Iniciar Sesión</p>

            <form 
                className='form-login-style'
                onSubmit={handleSubmit}
            >

                <div className='inputs-container'>

                    <input
                        className='login-inputs'
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className='login-inputs'
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

                
                <button className='login-button' type="submit">Login</button>

            </form>

        </div>
    )
}

export default LoginFormCard