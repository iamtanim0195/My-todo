import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/action";
import FilterBtn from "./FilterBtn";
import TodoList from "./TodoList";
const Todo = () => {

    const dispatch = useDispatch()
    const [todos, setTodos] = useState("");
    const [searchTerm, setSearchTerm] = useState("");


    const handleAddTodo = (text) => {
        dispatch(addTodo(text));
    }
    const handleAddTodoClick = () => {
        if (todos.trim() !== "") {
            handleAddTodo(todos.trim());
            setTodos("");
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    }
    return (
        <div className="max-w-4xl mx-auto  sm:mt-8 p-4 bg-gray-100 P-4">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">My Todo</h2>
            {/* input text and button */}
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    name="addTodoInput"
                    id="addTodoInput"
                    placeholder="Add Todo"
                    value={todos}
                    onChange={(e) => setTodos(e.target.value)}
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500"
                />
                <button
                    onClick={handleAddTodoClick}
                    className="ml-4 p-2 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none">
                    <IoMdAdd />
                </button>
            </div>
            {/* search */}
            <div className="flex items-center justify-between">
                <FilterBtn />
                <div className="flex items-center mb-4">
                    <input
                        type="text"
                        name="addTodoInput"
                        id="addTodoInput"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500"
                    />
                    <button
                        className="ml-4 p-2 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none">
                        <GoSearch />
                    </button>
                </div>
            </div>
            <TodoList />
        </div>
    );
}

export default Todo;