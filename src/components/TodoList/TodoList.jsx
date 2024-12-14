import React from 'react'
import TodoCard from './TodoCard'
import PropTypes from 'prop-types'

const TodoList = ({todos}) => {
  return (
    todos.map((todo)=>(
        <TodoCard todo={todo} key={todo.id}/>
    ))
  )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      deadline: PropTypes.any.isRequired,
      category: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })),
};

export default TodoList