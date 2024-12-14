import TodoCard from './TodoCard'
import PropTypes from 'prop-types'

const TodoList = ({todos, onComplete, onEdit, onDelete}) => {
  return (
    todos.map((todo)=>(
        <TodoCard todo={todo} key={todo.id} onComplete={onComplete} onDelete={onDelete} onEdit={onEdit}/>
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
    onComplete: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

export default TodoList