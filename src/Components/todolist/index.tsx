import React, { useState } from 'react';
import Styles from './index.module.scss';
import { inputtype } from '../../types/inputtype';

export type todos = {
    todo: inputtype[];
    settodo: React.Dispatch<React.SetStateAction<inputtype[]>>;
};

export const TodoList: React.FC<todos> = ({ todo, settodo }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const todosPerPage = 3;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todo.slice(indexOfFirstTodo, indexOfLastTodo);

    const deleteTodo = (index: number) => {
        const updatedTodos = [...todo.slice(0, index), ...todo.slice(index + 1)];
        settodo(updatedTodos);
    };

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={Styles.todolist}>
            {currentTodos.map((item, index) => (
                <div key={index}>
                    <div className={Styles.todoitem}>
                        <div className={Styles.item}>{item.dos}</div>
                        <div>{item.deadline}</div>
                        <button className={Styles.deletebutton} onClick={() => deleteTodo(index)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            <div className={Styles.pagination}>
                {Array.from({ length: Math.ceil(todo.length / todosPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};
