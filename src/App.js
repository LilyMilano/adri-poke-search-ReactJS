import Timer from './components/Timer/Timer';
import Todo from './components/ToDo/Todo';
import Pika from './components/Pika/Pika';
import NavBar from './NavBar/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			{/* <Timer />
			<Todo />
			<Pika /> */}

			<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route exact path="/" element={<h1>Inicio</h1>} />
					<Route exact path="/pika" element={<Pika />} />
					<Route exact path="/todo" element={<Todo />} />
					<Route exact path="/timer" element={<Timer />} />
				</Routes>
			</BrowserRouter>
			</div>
		</>
	);
}

export default App;
