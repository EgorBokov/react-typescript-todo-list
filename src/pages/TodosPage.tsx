import React, { useEffect, useState } from 'react';
import {Form} from "../components/Form";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev]);
    }

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Do you really want to remove task number ' + id + '?');
        if (shouldRemove) { setTodos(prev => prev.filter((item) => item.id !== id)) };
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item;
        }))
    }

    return <React.Fragment>
        <Form onAdd={addHandler} />
        <TodoList
            onRemove={removeHandler}
            onToggle={toggleHandler}
            todos={todos}
        />
    </React.Fragment>
}