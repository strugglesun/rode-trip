import moment from 'moment'
const touristModule={
  state:()=>({
    tourist:[
      {
        id:1111,
        name:'张潇潇',
        checked:false
      },
      {
        id:1112,
        name:'张笑笑',
        checked:false
      },
      {
        id:1113,
        name:'李梅',
        checked:false
      }
    ]
  }),
  getters:{
    touristLength(state){
      return state.tourist.length
    },
    selectedTourist(state){
      return state.tourist.filter(item=>item.checked)
    },
    selectTouristLength(state){
      return state.tourist.filter(item=>item.checked).length
    }
  },
  mutations:{
    addTourist(state,name){
     state.tourist.push({
       id:moment(new Date()).format(),
       name:name,
       checked:true
     })
    }
  }
}
export default touristModule