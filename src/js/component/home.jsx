import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>My Todos List</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={() => setInputValue(e.target.value)}
						// value={(inputValue)}
						onKeyPress={(e) => {
							console.log(e)
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="Que tengo que hacer?"
					></input>
				</li>
				{todos.map((item, index) => (
					<li>
						{item}{" "}
						<i class="fas fa-trash-alt"
							onClick={() =>
								setTodos(
									todos.filter(t, currentIndex) =>
									index != currentIndex
						
							}></i>
					</li>
				))}
		</ul>
		</div >
	);
};

export default Home;
