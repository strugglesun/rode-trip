const checkedModule={
  state:()=>({
    insuranceChecked:true,
    agreementChecked:false
  }),
  mutations:{
    handleInsurance(state,value){
      state.insuranceChecked=value
    },
    handleAgreement(state,value){
      state.agreementChecked=value
    }
  }
}
export default checkedModule