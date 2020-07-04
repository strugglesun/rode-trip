<template>
  <div class="travel-detail">
    <Back><h3>自驾团</h3></Back>
    <div class="introduce">
      <img :src="currentDetail.imgUrl" alt="">
      <div class="router">
        <p>{{currentDetail.route}}</p>
        <span>￥{{currentDetail.price}}/人起</span>
      </div>
    </div>
    <div class="travel-date">
      <p>出游日期与价格日历</p>
      <el-button type='primary' size='small' plain>春节</el-button>
      <el-button type='primary' size='small' plain>02/21</el-button>
    </div>
    <div class="travel-type">
      <ul>
        <li :class="{active1:tab==='special'}" @click="tab='special'">行程特色</li>
        <li :class="{active1:tab==='introduce'}" @click="tab='introduce'">行程简介</li>
        <li :class="{active1:tab==='notice'}" @click="tab='notice'">预订须知</li>
      </ul>
    </div>
    <div class="travel-special" v-show="tab==='special'">
      <Linea>
        <template v-slot:txt>
          <span class="txt">行程特色</span>
        </template>
      </Linea>
      <div class="special-content">
        <p><span>美景：</span><span>汉族青砖四合大院--元阳梯田--东川红土地</span></p>
        <p><span>团队用餐：</span><span>全程中式午晚餐，五菜一汤</span></p>
        <p><span>住宿安排：</span><span>温馨的家</span></p>
        <p><span>安心旅行：</span><span>赠送最高保额30万境外救援保险，让您玩得开心</span></p>
        <p><span>优秀团队：</span><span>精选带团经验丰富，具备专业讲解知识的导游团队</span></p>
        <img :src="imgurl2" alt="">
        <img :src="imgurl3" alt="">
      </div>
    </div>
    <div class="travel-introduce" v-show="tab==='introduce'">
      <Linea>
        <template v-slot:txt>
          <span class="txt">行程简介</span>
        </template>
      </Linea>
      <div class="introduce-content">
        <div>
          <img class="shape" :src="imgurl8" alt="">
          <h3>第一天 | 各地-昆明</h3>
          <p><img :src="imgurl9" alt=""><span>餐食：晚餐</span><span>住宿：昆明</span></p>
          <span>各地飞往历史文化名城云南昆明(注意：请在航班起飞前90分钟到达飞机场)
                到达昆明后，可自行前往昆明的石林、九乡、滇池等特色景区游玩。18:00
                酒店大厅集合，由活动方安排分车及安排行前说明交流会。
                温馨提示：大交通可以委托老陈自驾机票客服小刘（13382069500）预定，
                也可以自行预定，订票 请和领队确认名额。
          </span>
        </div>
        <div>
          <img class="shape" :src="imgurl8" alt="">
          <h3>第二天 | 昆明--建水</h3>
          <p><img :src="imgurl9" alt=""><span>餐食：早餐、晚餐</span><span>住宿：建水</span></p>
          <span>酒店早餐后，前往由传统的汉族青砖四合大院、彝族土掌房和汉彝结合的
                瓦檐土掌房三类建筑风格结合的民居世界--团山居民，团山至今还保存着的
                完整古村落整体格局，有着滇南乡村特色风貌与传统社会人文环境的原生态
                特点，世所罕见，极为珍贵。到达建水县城之后，前往参观朱家花园，有一组
                规模宏大的清代居民建筑，有“滇南大观园”之誉！房间内的床，凳，桌，椅
                均采用紫木雕刻，体现清代风格，门僮及导游小姐的服饰和接待客人的清式礼
                仪，让人有恍惚置身百年前历史生活的感受。</span>  
          <img class="show" :src="imgurl4" alt="">          
          <img class="show" :src="imgurl5" alt="">          
        </div>
        <div>
          <img class="shape" :src="imgurl8" alt="">
          <h3>第三天 | 建水--元阳</h3>
          <p><img :src="imgurl9" alt=""><span>餐食：早餐、晚餐</span><span>住宿：元阳</span></p>
          <span>酒店早餐后，前往中国最美的元阳梯田。元阳哈尼梯田主要有三大核心区组--
                【坝达景区】、【老虎嘴景区】、【多依树景区】，去老虎嘴俯瞰梯田是很好
                的选择，6000多亩梯田分布于深谷，像一朵巨大的花蕊，老虎嘴被美国摄影家
                称为世界上最壮丽的田园风光；晚上看夕阳，则应该选择坝达景区，在龙树坝
                拍日落也是不错的选择；感受大自然的鬼斧神功，19万亩映着蓝天的哈尼梯田
                就在你的脚下，哈尼梯田有一千多年的历史，至今科学家仍无法解答，这样大
                的面积，在这崇山峻岭中是怎样挖掘的。</span>
          <img class="show" :src="imgurl6" alt="">          
          <img class="show" :src="imgurl7" alt="">   
        </div>
      </div>
    </div>
    <div class="notice" v-show="tab==='notice'">
      <Linea>
        <template v-slot:txt>
          <span class="txt">预订须知</span>
        </template>
      </Linea>
        <div class="notice-content">
          <div>
            <h4>【活动费用】 4580元/人</h4>
            <h4>【VIP会员价】 4500元/人</h4>
            <h4>【儿童费用】 2500元/人 (1.1米-1.4米占床)</h4>
          </div>
          <div>
            <h4>【费用包含】</h4>
            <p>1、交通：起亚狮跑或现代IX35(4人1车，1000元/人，如不足4人1车，需补车费)</p>
            <p>2、通讯：通讯设备，车标，车队出行的后勤服务组织费用</p>
            <p>3、用餐：6早6晚，（晚餐60元/人）</p>
            <p>4、住宿：建水住五星标准；昆阳，元阳，玉溪住四星标准；东川红土地住三星标准</p>
            <p>5、保险：太平洋旅游意外险</p>
            <p>6、领队：优秀领队及当地导游服务</p>
            <p>7、景点：建水朱家花园，团山居民，元阳梯田，红河纳诺梯田，东川红土地。</p>
          </div>
          <div>
            <h4>【费用不含】</h4>
            <p>1、各地往返昆明机票自理</p>
            <p>2、全程中餐自理，不占床位早餐请自理</p>
            <p>3、车辆的油费，路桥费，停车费用</p>
            <p>4、全程用餐过程中客人所点酒水费用</p>
            <p>5、酒店电话费，洗衣费，购物等个人消费</p>
          </div>
          <div>
            <h4>【活动时间】</h4>
            <p>2015年12月27日-2016年1月2日</p>
          </div>
          <div>
            <h4>【租车说明】</h4>
            <p>1、本行程车辆是由组织方向当地租车公司代租；租车费用由组织方承担。基本车型：起亚狮跑；车型升级需增加车费。</p>
            <p>2、租车流程：</p>
            <p>a.拿车手续</p>
            <p>驾车人需带齐身份证、驾驶证和信用卡一张，凭上述证件办理租用手续；信用卡额度不得低于10000元人民币，租车的时候需刷8000元的预授权(神州租车规定)。</p>
            <p>b.归还所租车辆，办理还车手续后，即解除8000元预授权。</p>
            <p>c.交通违章的处罚，还车时需要刷2000元的违章预授权；作为交通违章押金，在还车之后一个月内无违章的情况下自动解除冻结；如有违章，驾车人自行处理违章并通知租车公司后，则解除2000元的预授权；或者请租车公司代为办理违章，费用从2000元预授权中扣除，剩余的部分则解除预授权。</p>
            <p>d.行车所产生的油费路桥费包括停车费均由车上人均摊，另有约定的除外。</p>
          </div>
          <div>
            <h4>【注意事项】</h4>
            <p>1、提前做好汽车检查和保养。提前准备好随车工具、备胎、润滑油等，检查户外装备是否齐全。遇旅途中出现意外事故，承办方有义务和责任为客人协助解决相关问题，但不负事故责任和经济赔偿，如产生赔偿将按保险公司规定赔偿。如遇人力不可抗拒因素所产生的费用由客人自理，如塌方、自然灾害等</p>
            <p>2、游客必须身体健康，游程中应遵守纪律，发扬团结互助的精神，必须听从领队的劝说不可擅自行动，否则后果自负。</p>
            <p>3、请自备好相机、胶卷、防晒霜，爱好摄影的注意照看相关器材。</p>
            <p>4、自驾车请保持在高速公路上的车距，行驶中望车主自觉遵守相关交通规则，不随意超车，严禁在弯道处停车、听从领队安排协调。</p>
            <p>5、长时间在户外活动，请戴上太阳镜，涂抹防晒霜以护肤；爱护环境，安全第一，全部垃圾带出景区。</p>
          </div>
        </div>
    </div>
    <div class="leader">
      <Linea>
        <template v-slot:txt>
          <span class="txt">领队介绍</span>
        </template>
      </Linea>
      <div class="leader-content">
        <router-link to='/leader'><p>中国自驾游联盟南京站</p></router-link>
        <router-link to='/leaderDetail'>
           <div>
             <img :src="imgurl10" alt="">
             <span>自2005年开始，南京首家专业自驾旅游公司--“中国自驾游联盟”，本着以城市为中心，......</span>
           </div>
        </router-link>
      </div>
    </div>
    <div class="commit">
      <Linea>
        <template v-slot:txt>
          <span class="txt">用户评论</span>
        </template>
      </Linea>
      <div class="commit-content">
        <div class="commit-head">
          <p>综合评价 :<img :src='imgurl11'/><img :src='imgurl11'/><img :src='imgurl11'/><img :src='imgurl11'/><img :src='imgurl11'/></p>
          <span>15人出游</span>
          <span>2条评论</span>
        </div>
        <div class="commit-footer">
          <div class="top">
            <p><img :src='imgurl12' class="avatar"/><span>E29329</span></p>
            <p>综合评价 :<img :src='imgurl11'/><img :src='imgurl11'/><img :src='imgurl11'/><img :src='imgurl11'/><img :src='imgurl11'/></p>
            <p>2019-12-21</p>
          </div>
          <div class="down">
            <p>18号就结束行程了，现在才来评价，总的来说还是不错的。</p>
            <p>行程安排：满意</p>
            <p>住宿餐食：满意</p>
            <p>旅行交通：满意</p>
            <p><img :src="imgurl13" alt=""><img :src="imgurl13" alt=""></p>
          </div>
        </div>
      </div>
    </div>
    <div class="travel-footer">
      <p><i class="el-icon-star-on" :class='{active3:showStar}' @click='showStar=!showStar'></i><span>收藏</span></p>
      <p><i class="el-icon-phone"></i><span>电话咨询</span></p>
      <p><router-link :to='`/signUp/${currentDetail.id}`'>我要报名</router-link></p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Linea from '../components/Linea'
import Back from'../components/Back'
export default {
name:'TravelDatail',
data(){
  return{
    imgurl:require('../assets/images/pre.png'),
    imgurl2:require('../assets/images/travel-special1.jpg'),
    imgurl3:require('../assets/images/travel-special2.jpg'),
    imgurl4:require('../assets/images/travel-introduce1.jpg'),
    imgurl5:require('../assets/images/travel-introduce2.jpg'),
    imgurl6:require('../assets/images/travel-introduce3.jpg'),
    imgurl7:require('../assets/images/travel-introduce4.jpg'),
    imgurl8:require('../assets/images/shape.png'),
    imgurl9:require('../assets/images/travel-pointer.png'),
    imgurl10:require('../assets/images/leader.jpg'),
    imgurl11:require('../assets/images/star.png'),
    imgurl12:require('../assets/images/avatar.jpg'),
    imgurl13:require('../assets/images/pic.jpg'),
    tab:'special',
    showStar:false

  }
},
components:{
  Linea,
  Back
},

computed:{
  ...mapState({
    travel:state=>state.travelModule.travel
  }),
  currentDetail(){
    return this.$store.getters.currentDetail(this.$route.params.id)
    
  }
}
}
</script>

<style lang='scss'>
.travel-detail{
  width: 100%;
  background: #e5e5e5;
  .active1{
    color:#50bbdb;
    border-bottom: 2px solid #39a1c0;
  }
  
  .introduce{
    width: 100%;
      img{
      width: 100%;
      display: block;
    }
    .router{
      width: 100%;
      padding:10px 20px;
  box-sizing: border-box;
      background-color: #fff;
      P{
        color:#333333;
        margin-bottom: 10px;
      }
      span{
        color:#f0851a;
      }
    }
  }
  .travel-date{
    margin: 20px 10px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    background-image: url('../assets/images/next.png');
    background-repeat: no-repeat;
    background-position: 90% center;
    p{
      margin-bottom: 10px;
    }
  }
  .travel-type{
    width: 100%;
    background-color: #fff;
    padding-bottom: 20px;
    ul{
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      line-height: 60px;
      // padding: 0 30px;
      box-sizing: border-box;
      li{
        font-weight: bold;
        flex-grow: 1;    
        text-align: center;  
        }
    }
  }
  .travel-special{
    width: 100%;
    .special-content{
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      background-color: #fff;
      img{
        width: 100%;
        margin-top:10px;
      }
      p{
        span:first-child{
          font-size: .6rem;
          font-weight: bold;
        }
        span:nth-child(2){
          font-size: .6rem;
        }
      }
    }
  }
  .travel-introduce{
    width: 100%;
    .introduce-content{
      width: 100%;
      padding: 20px 20px 0 20px;
      box-sizing: border-box;
    // margin-bottom: 10px;
      background-color: #fff;
      div{
        border-left: 1px dashed #ccc;
        padding-left: 20px;
        padding-bottom: 20px;
        position: relative;
        h3{
          color:#50bbdb;
          width: 85%;
          font-size: 1rem;
          border-bottom: 1px solid #50bbdb;
          padding-bottom: 5px;
        }
        
        span{
          color:#666666;
          font-size: .8rem;
        }
        p{
          width: 85%;
          border-bottom: 1px solid #ccc;
          line-height: 40px;
          margin-bottom: 10px;
          position: relative;
          span{
            margin-right: 10%;
            color:#333333;
            font-weight: bold;
            font-size: .8rem;
          }
          img{
            position: absolute;
            left:-25px;
            top:15px;
          }
        }
        .show{
          width: 100%;
          margin-top: 10px;
        }
        .shape{
          position: absolute;
          top:0;
          left: -11px;
        }
      } 
      div:last-child{
        padding-bottom: 0;
      }
    }
  }
  .notice{
    width: 100%;
    background-color: #fff;
    .notice-content{
          padding: 20px;
    box-sizing: border-box;
    div{
      margin-bottom: 20px;
    }
      h4{
        font-size: .8rem;
      }
      p{
        color:#8c8c8c;
        font-size: .8rem;
      }
    }
  }
  .leader{
    background-color: #fff;
    .leader-content{
    padding: 0 20px;
    a{
        text-decoration: none;
    }
      p{
        color:#000;
      border-bottom: 1px dashed #ccc;
      line-height: 40px;
      background-image: url('../assets/images/next.png');
      background-position: right center;
      background-repeat: no-repeat;
    }
    div{
      display: flex;
      align-items: center;
      margin-top: 10px;
      span{
        color:#b8b8b8;
        font-size: .7rem;
      }
    }
    }
  }
  .commit{
    width: 100%;
    .commit-content{
      // padding: 10px 0;
      background-color: #fff;
      .commit-head{
        padding: 10px 20px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        p{
          // line-height:50px;
          border-right: 1px solid #ccc;
          padding: 0 10px;
          flex-grow: 1;
          font-size: .7rem;
        }
        span{
          padding: 0 10px;
          border-right: 1px solid #ccc;;
          font-size: .7rem;
          display: inline-block;
          flex-grow: 1;
        }
        span:last-child{
          border: 0;
        }
      }
      .commit-footer{
        padding: 10px 20px;
        .top{
          display: flex;
          align-items: center;
          border-bottom: 1px dashed #ccc;
          padding: 10px 0;
          margin-bottom: 10px;
          .avatar{
            width: 40px;
            height: 40px;
          }
          p{
            font-size: .7rem;
            display: flex;
            align-items: center;
            flex-grow: 1;
            text-align: center;
          }
        }
        .down{
          img{
            margin-right: 10px;
            margin-top: 10px;
          }
          p{
            font-size: .8rem;
            color:#666666;
          }
        }
      }
    }
  }
  .travel-footer{
    width: 100%;
    background-color: #eee;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    .active3{
      color:#50bbdb;
    }
    p{
      display: flex;
      flex-direction: column;
      // line-height: 60px;
      padding: 10px 0;
      text-align: center;
      flex-grow: 1;
      i{
        font-size: 1.4rem;
      }
      span{
        font-size: .7rem;
      }
    }
    p:first-child{
      border-right: 1px #ccc solid;
    }
    p:last-child{
      // line-height: 60px;
      justify-content: center;
      background-color: #50bbdb;
      a{
         color:#fff;
         text-decoration: none;

      }
    }
  }
}
</style>