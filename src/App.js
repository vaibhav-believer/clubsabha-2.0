import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Events } from './pages/Events';
import { About } from './pages/About';
import { Contact } from './pages/Contact'; 
import { Abort } from './pages/Abort'; 


export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={ <Home /> }/>
				<Route path='/register' element={ <Register /> }/>
				<Route path='/login' element={ <Login /> }/>
				<Route path='/events' element={ <Events /> }/>
				<Route path='/about_us' element={ <About /> }/>
				<Route path='/contact_us' element={ <Contact /> }/>
				<Route path='/*' element={ <Abort /> }/>
			</Routes>
		</Router>
	)
}
