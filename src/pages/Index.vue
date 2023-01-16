<script setup>
import { onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { userStore } from "../store/user";
import Todo from "../components/Todo.vue";
import service from "../utils/api";
const { userInfo } = storeToRefs(userStore());
const data = reactive({ todoList: [] });

const addItem = () => {
    const temp =  { "title": "temp titile", "content": "bla bla ...", "status": false, "timeStamp": Date.now() }
    data.todoList = [ ...data.todoList, temp ]
}

const editItem = (timeStamp) => {
    const newTodo = data.todoList.map(item => {
        if(item.timeStamp === timeStamp) return { ...item, status: !item.status}
        return item
    })
    data.todoList = newTodo;
}

const deleteItem = (timeStamp) => {
    const newTodo = data.todoList.filter(item => item.timeStamp !== timeStamp)
    data.todoList = newTodo;
}   

onMounted(async () => {
  try {
    const response = await service.get("/mock/fakeData.json");
    console.log("response", response);
    data.todoList = response;
  } catch (error) {
    console.log("error");
  }
});
</script>

<template>
  <div>
    <h1 class="text-bold text-2xl">Hi {{ userInfo?.account ?? "User" }}</h1>
    <h2 class="text-lg py-1"> {{ new Date().toLocaleDateString()  }}</h2>
    <Todo @editItem="editItem" @deleteItem="deleteItem" v-for="item in data.todoList" :todoItem="item" />
    <button class="btn" @click="addItem">add item</button>
  </div>
</template>
