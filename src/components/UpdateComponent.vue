<template>
    <router-link :to="{name:'list'}" class="link" > <span class="underline"><b>Вернуться к списку </b> </span></router-link>
    <div class="container">
        <h1>Обновление данных</h1>
        <input v-model="name" placeholder="название" class="input">
        <input v-model="desc" placeholder="описание" class="input">
        <button @click.prevent="setUpdatedData(this.id,this.name,this.desc)" class="button" >Сохранить</button>
    </div>
</template>

<script>
    export default{
        name:"update",
        data(){
            return {
                name: null,
                desc: null
            }
        },
        computed: {
            id() {
                return parseInt(this.$route.params.id);
            },
            med_object() {
                return this.$store.getters.getObjectById(this.id)[0];
            },
        },
        mounted(){
        },
            created() {
                this.name = this.med_object.name;
                this.desc = this.med_object.description;
        },
        methods:{
            setUpdatedData(id, name, desc){
                const updatedData = {
                    id: id,
                    name: name,
                    desc: desc
                };
                this.$store.commit("setUpdatedData", updatedData)
                this.$router.push({name:"list"})
            }
        }
    }
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  text-align: center;
  margin-top: 20px; /* Добавляем отступ сверху */
}

.link {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.link:hover {
  color: green;
}

.underline {
  text-decoration: underline; /* Добавляем подчеркивание */
}

.input {
  border: 2px solid green;
  padding: 10px; /* Увеличиваем размер вводов */
  margin: 10px 0; /* Увеличиваем пространство между элементами */
  width: 300px; /* Устанавливаем фиксированную ширину вводов */
}

.button {
  background-color: green;
  color: white;
  border: none;
  padding: 15px 30px; /* Увеличиваем размер кнопки */
  margin-top: 10px; /* Увеличиваем отступ сверху */
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: darkgreen;
}
</style>