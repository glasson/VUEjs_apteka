<template>
    <router-link :to="{name:'list'}" class="link" > <span class="underline"><b>Вернуться к списку </b> </span></router-link>
    <div class="container">
        <h1>Добавить лекарство</h1>
        <p></p>
        
        <input v-model="name" placeholder="название" class="input">
        <input v-model="desc" placeholder="описание" class="input">
        <button @click.prevent=" save_med " class="button"> Сохранить </button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name:"create",
        data(){
            return{
                name:null,
                desc:null
            }
        },
        methods:{
            save_med_local(){
                this.$store.commit('incId')
                let med = {
                    id: this.$store.state.id,
                    name: this.name,
                    description: this.desc
                }
                this.$store.commit('addMed', med)
                this.$router.push({name:"list"})
                console.log(this.$store.state.list_of_meds)
            },
            save_med(){
              const data = {
                "name":this.name,
                "description":this.desc
              } 
              
              axios.get("http://127.0.0.1:8000/create", {params:data}).then((data)=>{console.log(data);})
            },
                           
        },
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