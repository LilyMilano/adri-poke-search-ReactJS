import React, { useState, useEffect } from 'react';
import './pika.css';

const Pika = () => {
	const [pokemon, setPokemon] = useState(null);
	const [id, setId] = useState(1);
	const [search, setSearch] = useState('');

	useEffect(() => {
		setPokemon(null);
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then((res) => res.json()) //promise
			.then((data) => {
				setPokemon({
					number: data.id,
					name: data.name,
					img: data.sprites.front_default,
				});
			});
	}, [id]);

	// ____________________________________________________________________________

	const handleprevious = () => {
		id > 1 && setId(id - 1);
	};
	const handlenext = () => {
		setId(id + 1);
	};

	const handleInputChange = (e) => {
		setSearch(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (search.length > 2) {
			setPokemon(null);
			fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
				.then((res) => res.json())
				.then((data) => {
					setPokemon({
						name: data.name,
						img: data.sprites.front_default,
					});
					setId(data.id);
				});
		}
	};
	// ____________________________________________________________________________

	return (
		<div className='div-container'>
			<h2>Pokemon</h2>
			{!pokemon ? (
				<h3>Loading...⌛</h3>
			) : (
				<>
					<h3>{pokemon.number}</h3>
					<h3>{pokemon.name}</h3>
					<img className="img" src={pokemon.img} alt={pokemon.name} />
				</>
			)}

			<div className="div-button">
				<button className="btn btn-success" onClick={handleprevious}>
					{' '}
					Previous{' '}
				</button>
				<button className="btn btn-success" onClick={handlenext}>
					{' '}
					Next{' '}
				</button>
			</div>

			<div className='div-container'>
				<form onSubmit={handleSubmit}>
					<input className="text" value={search} onChange={handleInputChange} />
				</form>
			</div>
		</div>
	);
};

export default Pika;
