import React from 'react';
import { useState, useEffect } from 'react';

export const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <section>
            <div>
                <label htmlFor="">Username</label>
                <input 
                    type="text" 
                    name="username"
                    placeholder="John Doe"
                    onChange={ (e) => setUserName(e.target.value) } 
                />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="john@test.com"
                    onChange={ (e) => setEmail(e.target.value) }
                />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password"
                    onChange={ (e) => setPassword(e.target.value) }
                />
            </div>

            <div>
                <label htmlFor="">Confird-password</label>
                <input 
                    type="password" 
                    name="password_confirmation" 
                    placeholder="retype-password"
                    onChange={ (e) => setConfirmPassword(e.target.value) }
                />
            </div>

            <div>
                <label htmlFor="">Submit</label>
                <button type="submit">Submit</button>
            </div>
        </section>
    )
}