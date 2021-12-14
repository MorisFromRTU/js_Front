<template>
    <section>
        <li class="todo-item" :class="{ done: todo.isCompleted }">
        <div class="title">{{ todo.title }}</div>
        <div class="actions">
            <input
            type="checkbox"
            class="checkbox"
            :checked="todo.isCompleted"
            @input="onCheckboxInput(todo.id, todo.isCompleted)"
            />
            <button @click="onDeleteTodoClicked(todo.id)">x</button>
        </div>
        </li>
    </section>
</template>
<script>
import { deleteTodo, patchTodo} from '@/netClient/todoService';

export default {
    name: "TodoItem",
    data: () => ({}),
    props: ["todo"],
    methods: {
        async onDeleteTodoClicked(id){
            try {
                await deleteTodo({id});
                this.$emit("todo-deleted", id);
            } catch (error) {
                console.error({error});
            }
        },
        async onCheckboxInput(id, isCompleted){
            try {

                const updateTodo = await patchTodo({id, isCompleted: !isCompleted});
                if (updateTodo){
                    this.$emit("todo-updated", updateTodo);
                }
                
            } catch (error) {
                console.error({error});
            }
          
           
        },
    }
    
}
</script>

