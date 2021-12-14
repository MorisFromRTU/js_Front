<template>
    <div class="home-page base-page">
        <CreateTodo @todo-created="onTodoCreated" />
        <div class="separator">
            <hr />
        </div>
        <ul class="todo-list">
            <TodoItem
            v-for="todoItem in todoList"
            :key="todoItem.id"
            :todo="todoItem"
            @todo-updated="onTodoUpdated"
            @todo-deleted="onTodoDeleted"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';
import CreateTodo from '@/components/CreateTodo';
import { fetchTodoList} from '@/netClient/todoService';

export default {
    name: 'HomePage',
    components: {
        CreateTodo,
        TodoItem
    },
    data: () =>({
        
        todoList: [],
    }),
    created(){
        this.fetchTodoList()
    },
    methods: {
        onTodoCreated(){
            this.fetchTodoList();
        },
        onTodoUpdated(updateTodo){
            const todo = this.todoList.find((el) => el.id === updateTodo.id);
            todo.isCompleted = updateTodo.isCompleted;
        },
        onTodoDeleted(id){
            this.todoList = this.todoList.filter((el) => el.id !== id);
        },
        async fetchTodoList(){
            try {
                this.todoList = await fetchTodoList();
            } catch (error) {
                console.error({error});
            }
        },
    },
};
</script>

<style scoped>
p{
    color: #ffffff;
}
</style>