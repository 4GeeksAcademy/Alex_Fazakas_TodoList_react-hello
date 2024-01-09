import React, { useState } from "react";


// Create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			setTodos([...todos, inputValue]);
			setInputValue("");
		}
	};

	const handleDelete = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	return (
		<div className="container mt-5">
			<h1>My Todos List</h1>
			<ul>
				<li>
					<input
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
						placeholder="Que tengo que hacer?"
					/>
				</li>
				{todos.map((item, index) => (
					<li key={index}>
						{item}{" "}
						<i
							className="fas fa-trash-alt"
							onClick={() => handleDelete(index)}
						></i>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;
