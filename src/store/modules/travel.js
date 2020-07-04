const travelModule={
  state:()=>({
    travel:[
      {
        id:12341,
        imgUrl:require('../../assets/images/travel1.jpg'),
        route:'重庆-雅安-西昌-盐源-泸沽湖',
        title:'小资圣地泸沽湖5日自驾',
        price:3600,
        domestic:true,
        calendarValue:new Date(),
        roomValue:0,
        peopleValue:0,
        childValue:0,
        sex:'男',
        travelName:'',
        travelPhone:'',
        travelEmail:'',
        payMethod:'支付宝',
        orderNum:122455778646566771341
      },
      {
        id:12342,
        imgUrl:require('../../assets/images/travel2.jpg'),
        route:'广州-开平-番禺-深圳',
        title:'食在广东粤菜美食6日自驾',
        price:5600,
        domestic:true,
        calendarValue:new Date(),
        roomValue:0,
        peopleValue:0,
        childValue:0,
        sex:'男',
        travelName:'',
        travelPhone:'',
        travelEmail:'',
        payMethod:'支付宝',
        orderNum:122455778646566771342
      },
      {
        id:12343,
        imgUrl:require('../../assets/images/travel3.jpg'),
        route:'墨尔本-大洋路-堪培拉-悉尼',
        title:'澳洲大洋路精彩自驾之旅11日',
        price:3500,
        domestic:false,
        calendarValue:new Date(),
        roomValue:0,
        peopleValue:0,
        childValue:0,
        sex:'男',
        travelName:'',
        travelPhone:'',
        travelEmail:'',
        payMethod:'支付宝',
        orderNum:122455778646566771343,
      },
      {
        id:12344,
        imgUrl:require('../../assets/images/travel4.jpg'),
        route:'旧金山－文图拉－洛杉矶－檀香山',
        title:'加州一号公路 + 夏威夷浪漫自驾之旅',
        price:7600,
        domestic:false,
        calendarValue:new Date(),
        roomValue:0,
        peopleValue:0,
        childValue:0,
        sex:'男',
        travelName:'',
        travelPhone:'',
        travelEmail:'',
        payMethod:'支付宝',
        orderNum:122455778646566771344
      },
      {
        id:12345,
        imgUrl:require('../../assets/images/travel5.jpg'),
        route:'伊尔库茨克-利斯特维扬卡',
        title:'贝加尔湖双飞8日深度自驾',
        price:8700,
        domestic:false,
        calendarValue:new Date(),
        roomValue:0,
        peopleValue:0,
        childValue:0,
        sex:'男',
        travelName:'',
        travelPhone:'',
        travelEmail:'',
        payMethod:'支付宝',
        orderNum:122455778646566771345
      }
    ]
  }),
  getters:{
    domesticTravel(state){
      return state.travel.filter(item=>item.domestic)
    },
    noDomesticTravel(state){
      return state.travel.filter(item=>!item.domestic)
    },
    currentDetail: (state) => (id) => {
      return state.travel.find(item=>item.id.toString()===id)
    }
  }
}
export default travelModule