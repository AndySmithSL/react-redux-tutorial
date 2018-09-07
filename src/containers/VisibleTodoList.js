import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(x => x.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(x => !x.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => dispatch(toggleTodo(id))
    };
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList;