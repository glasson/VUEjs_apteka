<template>
    <router-link :to="{name:'list'}" class="link" > <span class="underline"><b>Вернуться к списку </b> </span></router-link>
    <div class="content">
      <h1>{{ med.name }}</h1>
        <div>{{ med.description }}</div> 
      <router-link
        :to="{ name: 'update', params: { id: this.$route.params.id } }"
      >
        <button class="button">Изменить</button>
      </router-link>
    </div>
  </template>

<script>
    export default{
        name:"show",
        data(){
        },
        computed:{
            med(){
                return this.findObjectWithId(this.$store.state.list_of_meds, this.$route.params.id)
            }
        },
        mounted(){            
        },
        methods:{
            findObjectWithId(array, targetId) {
                for (const key in array) {
                     if (array[key].id === parseInt(targetId)) {
                        return array[key];
                     }
                }
                return null; 
            }
        }
    }
</script>

<style>
.content {
  text-align: center;
  margin: 50px 0; /* 50 пикселей отступа сверху и снизу */
}

.description {
  background-color: #e0f2e9; /* Светло-зеленый фон */
  padding: 10px;
  border: 1px solid #4caf50; /* Зеленое обрамление */
  border-radius: 5px;
  margin-top: 20px;
}

.button {
  background-color: white; /* Белый цвет кнопки */
  border: 2px solid #4caf50; /* Зеленое обрамление */
  color: #4caf50; /* Зеленый текст */
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #4caf50; /* Зеленый цвет при наведении */
  color: white;
}
</style>