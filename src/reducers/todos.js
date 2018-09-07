const todos = (state = [], action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, { id: action.id, text: action.text, completed: false }];
        case "TOGGLE_TODO":
            return state.map(x => {
                x.id === action.id ? {...x, completed: !x.completed} : x
            });
        default:
            return state;
    }
};

export default todos;