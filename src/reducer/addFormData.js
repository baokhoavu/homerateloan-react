// addFormData.js
const addForm = (state = {}, action) => {
    switch (action.type) {
        case "ADD_NAME":
            console.log("add_name");
            return { userName: action.userName };
        default:
            return state;
    }
};

export default addForm;
