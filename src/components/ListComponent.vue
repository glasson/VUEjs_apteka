<template>
    <div class="container">
      <h1>Список лекарств</h1>
      <div class="card-list">
        <div v-for="med in med_list" :key="med.id" class="card">
          <div class="card-header">
            <router-link :to="{ path: `/show-medicament/${med.id}`}" class="fuck-underline"><h2 class="green-link">{{ med.name }}</h2></router-link>
          </div>
          <div class="card-content">
            <div>Номер: {{ med.id }}</div>
            <div>Описание: {{ med.description }}</div>
          </div>
          <div class="card-footer">
            <button @click.prevent="delete_med(med.id)" class="delete-button">Удалить</button>
          </div>
        </div>
      </div>
      <p></p>
      <router-link :to="{ name: 'create' }" class="add-link"> <h1> + Добавить </h1> </router-link>    
    </div>
  </template>


<script>
import axios from 'axios';
    export default{
        name: "list",
        data(){
          return {
            med_list: null
          }
        },
        methods:{
            delete_med(id){
              axios.get(`http://127.0.0.1:8000/delete/${id}`)
              axios.get(`http://127.0.0.1:8000/list`).then((data)=>{this.med_list = data['data']})
            },
            getMeds(){
              axios.get("http://127.0.0.1:8000/list")
                .then((data) => {
                  this.med_list = data['data']
              })
            }
        },
        mounted(){
          this.getMeds()
        }

    }
</script>

<style>
.add-link{
    text-decoration: none;
    color: darkgreen
}
.add-link:hover{
    color:yellowgreen
}

.fuck-underline{
    text-decoration: none;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  text-align: center;
  margin-top: 20px;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none; /* Убираем маркеры списка */
  padding: 0;
}

.card {
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-header {
  text-align: center;
}

.header-hover:hover h2 {
    background-color: lightgreen;
  }

.green-link {
  color: green;
  text-decoration: none;
}

.green-link:hover {
    color: yellowgreen;
    text-decoration: none;
  }

.card-content {
  margin-top: 10px;
}

.card-name {
  font-size: 20px; /* Увеличиваем размер названия лекарства */
  font-weight: bold; /* Делаем название жирным */
  text-align: center;
  margin-bottom: 10px; /* Добавляем отступ снизу */
}

.card-footer {
  display: flex;
  justify-content: center; /* Центрируем кнопку "Удалить" */
  margin-top: 10px;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: darkred;
}
</style>