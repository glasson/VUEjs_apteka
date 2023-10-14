import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            id:6,
            list_of_meds : [
                {
                    name: "аспирин",
                    description: "лечит температуру",
                    id: 1
                },
                {
                    name: "глицин",
                    description: "успокаивает",
                    id: 2
                },
                {
                    name: "коффеин",
                    description: "бодрит",
                    id: 3
                },
                {
                    name: "витамины",
                    description: "улучшают здоровье",
                    id: 4
                },
                {
                    name: "антибиотик",
                    description: "лечит все",
                    id: 5
                },
                {
                    name: "гематоген",
                    description: "-",
                    id: 6
                },
            ]
        }
    },
    getters: {
        getMeds: state=> {
            return state.list_of_meds
      },
        getObjectById:(state) => (id) =>{
            return state.list_of_meds.filter(obj => obj.id === id)
      },
    
    },
    mutations:{
        incId(state) {
            state.id ++
        },
        addMed(state, med){
            state.list_of_meds.push(med)
        },
        deleteMed(state, id){
            state.list_of_meds = state.list_of_meds.filter(med => med.id !== id)
        },
        setUpdatedData(state, updatedData){
            let obj = state.list_of_meds.find(med => med.id === updatedData.id)
            obj.name = updatedData.name
            obj.description = updatedData.desc
            console.log(updatedData.name, updatedData.desc , state.list_of_meds);
        }
        
    },

        
})

export default store