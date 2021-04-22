const app = new Vue({
    el: "#app",
    data: {
        // TODO ITEMS
        todos: [
            {
                text: 'Comprare corde',
                completed: false,
                textToUpdate: '',
                visible: false,
            },
            {
                text: 'Fare montaggio video',
                completed: false,
                textToUpdate: '',
                visible: false,
            },
            {
                text: "Lavare l'auto",
                completed: false,
                textToUpdate: '',
                visible: false,
            }
        ],
        // ALLOCATED TODO TRASH MEMORY
        deletedList: [],

        // NEW LIST ITEM
        newTodo: '',

        // EDITING PARAMETERS
        editTodo: {
            visibility: false,
            text: '',
            index: null,
        },
    },
    methods: {
        // ADD NEW TODO
        addTodo(){
            if(this.newTodo !== ''){
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                    textToUpdate: '',
                    visible: false,
                });
                this.newTodo = '';
                this.$refs.todoInput.focus();
            }
        },
        // REMOVE TODO
        removeTodo(index){
            const deleted = this.todos.splice(index, 1);
            this.deletedList.push({
                text: deleted[0].text,
                completed: true,
                textToUpdate: '',
                visible: false,
            });
            console.log(this.deletedList);
        },
        // RESTORE DELETED TODO
        putBack(index){
            this.todos.push({
                text: this.deletedList[index].text,
                completed: false,
                textToUpdate: '',
                visible: false,
            });
            this.deleteConfirm(index);
        },
        // DELETE TODO PERMANENTLY
        deleteConfirm(index){
            this.deletedList.splice(index, 1);
        },
        // TODO STATUS
        updateStatus(index){
            this.todos[index].completed = !this.todos[index].completed;
        },
        // EDIT MODAL
        showEdit(todo){
            todo.textToUpdate = todo.text;
            todo.visible = true;
        },
        // SAVE CHANGE
        updateTodo(todo){
            todo.text = todo.textToUpdate;
            this.cancelTodo(todo);
        },
        // CANCEL EDITING
        cancelTodo(todo){
            todo.visible = false;
        }
    }
});