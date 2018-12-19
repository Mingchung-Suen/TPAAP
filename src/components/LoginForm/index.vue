<template>
  <div class="container">
    <div class="title-container">
      <div
        :id="titleId1"
        class="title"
        style="border-right: 1px solid #d6d6d6"
        value="1"
        @click="titleClick(1)">
        {{ $t('login.logIn') }}
      </div>
      <!-- <div
        :id="titleId2"
        class="title"
        value="2"
        @click="titleClick(2)">
        {{ $t('login.register') }}
      </div> -->
    </div>
    <div v-if="!loginVisible" class="netid">
      <div class="netid-card" @click="handleNetidLogin">
        <div id="netid-logo" />
        <div class="third-party">
          <div>{{ $t('login.thirdparty') }}</div>
          <div class="netid-container">
            <div><a href="#">XJTU NetID</a></div>
          </div>
        </div>
      </div>
      <!-- <div class="tip">{{ $t('login.tip') }}</div> -->
    </div>
    <div class="tip">{{ $t('login.tip') }}</div>
    <div v-loading="formLoading" v-if="loginVisible" class="form-container">
      <form action="" class="form">
        <div class="form-item">
          <div class="user-icon" />
          <input :placeholder="$t('login.username')" type="text" class="name-input">
        </div>
        <div class="form-item">
          <div class="psw-icon" />
          <input :placeholder="$t('login.password')" type="password" class="name-input">
        </div>
        <div class="forget"><a href="#">{{ $t('login.forget') }}</a></div>
        <div class="submit-button-container">
          <button @click="handleLogin">{{ $t('login.logIn') }}</button>
        </div>
        <div class="third-party">
          <div>{{ $t('login.thirdparty') }}</div>
          <div class="netid-container">
            <div id="netid-logo" />
            <div><a href="#">XJTU NetId</a></div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { netidLogin } from '@/api/login'
export default {
  name: 'LoginForm',
  data() {
    return {
      titleId1: 'select',
      titleId2: '',
      loginVisible: false,
      formLoading: false
    }
  },
  methods: {
    handleLogin(e) {
      this.formLoading = true
      setTimeout(function() {
        this.formLoading = false
      }, 1000)
    },
    async handleNetidLogin() {
      this.$store.dispatch('LoginByXjtuNetID')
      // this.$router.push({ path: '/project/list' })
      // try {
      //   var res = await netidLogin()
      //   // console.log(res.data.data.html)
      //   if (res.data.ret === 200) {
      //     document.write(res.data.data.html)
      //   }
      // } catch (error) {
      //   console.log(error)
      // }
    }
    // titleClick(e) {
    //   if (e === 1) {
    //     this.titleId1 = 'select'
    //     this.titleId2 = ''
    //     this.loginVisible = true
    //   } else {
    //     this.titleId1 = ''
    //     this.titleId2 = 'select'
    //     this.loginVisible = false
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 380px;
  height: 420px;
  margin-top: 30px;
  background-color: white;
  .title-container{
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #d6d6d6;
    font-family: 'SF Pro Text';
    text-align: center;
    color: #666666;
    font-size: 18px;
    display: flex;
    justify-content: center;
    .title{
      // width: 190px;
      width: 100%;
      text-align: center;
      // cursor: pointer;
      background-color: #f6f6f6;
      border-bottom: 2px solid rgb(66, 112, 219);
    }
    // .title:hover{
    //   color: red;
    //   font-size: 19px;
    //   font-weight: bold;
    // }
    // #select{
    //   color: red;
    //   font-size: 19px;
    //   font-weight: bold;
    //   background-color: white;
    //   border-bottom: 2px solid rgb(66, 112, 219);
    // }
  }
  .tip{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #dfdfdf;
    text-align: center;
    // margin-top: 10px;
    // height: 90px;
    // line-height: 90px;
    color: #888888;
    font-family: 'SF Text Pro';
    font-size: 12px;
  }
  .netid{
    width: 100%;
    height: 320px;
    padding: 24px;
    padding-top: 60px;
    .netid-card{
      cursor: pointer;
      width: 200px;
      height: 200px;
      padding: 15px;
      margin: 0 auto;
      border: 2px solid #d2d2d2;
      #netid-logo{
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 20px;
        width: 70px;
        height: 70px;
        background-size: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url('../../../static/image/connect.png')
      }
    }
    .netid-card:hover{
      box-shadow: 0px 0px 30px #d2d2d2;
      border: 2px solid rgb(101, 155, 255);
    }
  }
  .third-party{
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: #888888;
    font-family: 'SF Pro Text';
    font-size: 13px;
    border-top: 1px solid #d2d2d2;
    display: flex;
    justify-content: space-between;
    .netid-container{
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      // a:hover{
      //   color: rgb(255, 100, 100)
      // }
    }
  }
  .form-container{
    width: 100%;
    height: 360px;
    padding: 24px;
    padding-top: 35px;
    // background-color: #888;
    // display: flex;
    .form{
      width: 100%;
      height: 100%;
      .form-item{
        width: 100%;
        height: 45px;
        border: 1px solid #d6d6d6;
        display: flex;
        margin-bottom: 20px;
        .user-icon{
          width: 44px;
          height: 44px;
          background-color: #c7c7c7;
          background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAbcElEQVR4Xu1dCfi+1Zi+b0v2LbKXIi2WNElSUmlDBqPFvmRGESmEJutQltKICCFrJFskWZKlsjSpJsmaKZomS6vUWG/XXed/XX/5znn373u/857nun5XLv+zPs+5v/csz/PcRJGigaKBqAZYdFM0UDQQ10ABSFkdRQMJDRSAlOVRNFAAUtZA0UA7DZQvSDu9lVoT0UAByEQMXabZTgMFIO30VmpNRAMFIA0MLWk1AGsBWB3AvQCsCuAOAG4P4LYAYvr8E4BLw98lAPz3m+v9/YrkHxsMpxSdgwYKQCqULOnmAPYC8LwAjCHNchGA7wM4e6X/nkvSACuyAA0UgCSULmlbAB8CcJcF2GZFl38GcC6AM1b6O5Pk1Qsc02S6LgCJmFrSPQH8CMCNR7ga/hpA810AK/7OIen/v0iPGigAiQPkXQD26FHXQzd1BYAvAvg8gONJXjZ0h1NovwAkDpDfhsP3Mq4Df0lOAfBpAB8nefEyTmIMYy4AmWEFSdZLLtsVAfg2gI8COJLkNWNYeMsyhgKQ2QC5EYDUzdFfAHwPwMqLzYDytsZfHl/h+nC9Qm4WroN9JXwnAOsBuM0CFomvmt8J4K0kPcYiFRooAIlvsX4C4N6Rf/4lyTW6rC5JfkNZJwDnduEdxQC6L4ANAfiSYCj7+L3lGACHkDyryzxyrzuUAZZeb5LeCOBliYlsRPLMoSYa3l82AnA/ABuEvwcAuGXPfX4LwIEkv9Bzu1k0VwAS/4L41/3HCSs/haT39XOTcDby9uyhADYP//WLfh9yOoD9SX6lj8ZyaaMAJA6QZwD4QMLQzyT5wUUvBEne6u0I4FEA/LB5045jOhbAPiQv6NhOFtULQGaYUdJDAHyj4pFw0C1Wm9Ul6SYAtgPwJACPA2A3mTbyOwB7k3x/m8o51SkAuZ41JfmAbHDcOmHoi0jebcwLIZxhHgvgaQAe0fLAfxyA3UjauXKSUgCyktnDl8Ov0SlwuIa3IG9dlhUT3GbsbPlvNeZ2/Wn9L4BtSKbOY8uiisbjLAAJKpPkmyLf6NyiQos/AODt1dK5pkvye4zPVi8Nbvt1F8zlAHYgeVrdCrmUKwABIMkxHgbHnSsM64fBDUn6jWRpRdINADzR17sA1qw5kSsBbE/SzpGTkckDRJKDn06tEevhL8aOJE/MZXVIsqfyPgBeW/P261d+yJzSmWTSAJG0CgA/9t2nYtHbbWQnkp/LBRwrz0PS2gDeA2CrGvP7mq+Tp+JaP3WA+KD9gopFcRWAXUj68J61SNot+Gr5ujglzyN5eNbKCJObLEAk+erzhAoj+7HM++6lPnM0WcjhssJ6uWuinp0e1yD5+yZtL2PZSQJEkv2ZfG2ZWgQ2/mYkHR8+KZFk/6//qjiXvI7kq3JXzFQBUhUtaNf1x5A8PvcFEJufpOcDOCwxf8fEr5Z7bPzkACLJLuyONfdVZ0z2JXnIVMGxYt6STg4OkTFV7EnS8SXZyhQBYgdEP5bF5DiSj8nW4g0mJsnu9g4Mi8kPSHo7lq1MCiDB8/U8AI4YnCV+CFyH5IXZWrzhxCQ5rv1fEtW2IOn49yxlagDZP7wex4z5apJ+NCsSNCDpQQBSLiZvI7l3rgqbGkDsJrFJxJi/dpjrFK4umy7mirOIM6bclaSTQ2QnkwGIJOfPdUKFmDia7g3ZWbiHCUmyJ/DbE01tTtK+bNnJlADiuAinEY3J6uXsMVs1kvxeZLf3mLyS5AHZoaNlEM1S6kGSPVd9BpklZ5B84FJObE6DlvTfIXHErB6/RNKeCdnJlL4gnwCwc8SCR5F8anbW7XFCkt4SPH9ntXoBybpu8z2OavimpgSQ1C/gASRfOby6l7cHSU8GcFRiBjcj+f/LO8PZI58SQGy8mJfq7iTt7l0kogFJGwf/rJiO1idpD4WsZBIAkXQPAOcnLLddToFQQ6zQkAkylbzhESS/NETfi2xzKgDZBkAqEnAtkikALdJGo+lbkmPTYzmF9yB5xGgG29NApgKQ1P75ryRv2JM+s25GkrMvxm77Xk/y5bkpYCoAsSvEoRHjmTyzKllDbnZvNR9JqZvAj5H0D1FWMhWAvA7AKyKWO5ukk0IXqdCApHcD2D1S7Mskd8hNiVMBiN0k7C4xS04i6TNKkWqA2BVnv0ixb5PcLDclTgUgqRiQY0mm3Llzs3nr+Uh6CYCDIg2YRPT+rRsfacWpACS1d/4wyaeP1D6jGpakZwOI3VRl+Zo+FYA4ttz0ALPk3SSfM6qVONLBhLRAR0aGdylJe0xnJVMBiB+wto9Y7jCSVbmxsjJ628lISnlEX0lyEbyLbadTq95UAGLWJJPLzJJDSb6wlrYmXqjCH+sKkrfNTUVTAchJALaOGO/NJH34LFKhAUm7mnc9UuxykiYjzUqmAhC7mcSuck2J7ATORaoB4pCAD0eKXUbSzL1ZyVQAYgbXR0Ys906Se2Zl1YEmU3GLdQlJ01hnJVMByGcCZ98s472PpJmXilR/QXyZEWPW+gVJe01nJVMByNEAnhCxXJY+REOsUknmjTd//Cz5IckqGokhhjVom1MBiIOhYl+J40k+elAtZ9K4pFcDeE1kOqeTdA6trGQqADkYwL4Ry51CcousrDrQZCT9J4DYlfg3SW45UNcLa3YqAHGcQiwtTfb5ZftaXZIm59M2FYDYlSSWhTzL25e+QLFyO5JSLjtHkvzXIfpdZJtTAYiztX82oehVSP5pkYZYhr5LROEyWKnFGCU5TNThojFZm6SzvhdJaEDSbwDE3jr2IRm7Al5avU7lC3JHAKYwjkmWGTn6XJWSbg4gxUn4eJJ+b8pKJgEQW0zS7wCYm3CWvIBkim4sK6O3mUwg93TyvZg8iGTqK92m24XXmRJAvgPgwRGNv4vkcxdujREPQJKjLk2mE5PbkLxyxFNoNbQpAcSBPuYBnyVZxlO3WhGRShWknlk6KloVUwJIyk3iYpJ36XNB5daWJGeFcXaYWXIWyX/Kbc5TA8i/A3h9xIhXkbxVjgbua06S7Ilgj4RZ4q3VtiTNrZ6VTOILEhiS3pagfv4lyTWysmzPk5Fk6ggnv4iJKew2IXlBz10vtLnsASLJyRr8ApySE0jGkjos1EBj6VySs0+aZSrFL3+mU5PmxFeYNUAk3QzALxKPWyvW364kU7+OY1mnCx2HpI8AeErFIJ5G0uWykNwB8nwAVe8b2R4w+16hkvzg+pNEhnd3+VWSsQQZfQ9p8PZyB8gJAFLced4ymKE1q33zkKtGkvXpEObY2rma5C2GHMM8284dIOcCWD+i0FMB7EjyinkqPIe+KlKQeormTf+/HOaaO0BShC9PJvmxHIw47zlIWhdAim5tXZLeii295A4Qb6HM8T1LXkzSEXJFGmpA0lYAvpaodmeSKefQhj0urnjuAPk2gE0j6j2cZIwSYXEWWYKeJTm+P0Z6+kcAN83lqjd3gLwPwLMia67EorcEo6RUEoxzSd63ZdOjq5Y7QPYC4Bf0WWJa6FuR/PPorDLyAUlKcc5/muROI59C7eHlDpAqbu+HkTy5trZKQcfV2GfNlx+xF/WXkoz5bC2dBnMHiI3oQClHw82Sg0jay7dITQ1UJLB2Kw8l6Sv0LCRrgNhCFZk4ziO5dhaWnNMkJH0UwJMi3dmrd1WSf5nTcAbvZgoASeWTtYI3JfndwTWdQQeS/EL+W99SRaaTXRrXKQBkLQA/T6zPEm5bE7ySnPfqvYni2Tl9Zg+QsM3ynjhGUXwNgDVI+pexSEQDknye8+v4vSJFrgrbq6zyi00FIHsAeFdi9ZfDesVPQ43DecmsuKw/r5JMLmnnOceHzJI/ALg3yV8u6xyHHLekmwD4IQBvV2PyEJLOHJOVTOILErZZBwFIcRGWqML49ipFe+BaJ5GMUdwtNWCmBBCnzLTz4ioJi2UVDdfHypS0IQB/GfwVicnDSaacF/sYykLamAxAwlfkTQBemtD01QA2JPnThVhjZJ1Kciqk7wFIpUTK9uthc0wNID6D+Cbm7om16CArp9E0WCYrIZ7/FAAbJZTgs9v6JP8nV0VNCiDhK7IDgC9WGPTLAP6ZpF23JyfhStd0EVXUdK8m+dqcFTQ5gASQ1MnO8Xkz4+bkNlF3IUs6FMDeFeWd4sdeCFn/iEwVIPZIPRvAmhWL4CMkn1Z3YeVQTpI5499RMZdLAdwvl7jz1FwnCZDwFfHtjH2wUrdaLro/yTfksPir5iBpu7D9TCWHsyPiViR9PsleJguQAJKqF/ZriwHYheSncl4Nkpz9xbl1q1L2ZMkkFbPtpAESQFJnv+3bGr8Ue9+dnUhaFcBZAFavmFx23rpVxiwAuc4Jz7da3l6kxK4qDyBpnr5sRNINAXzdgU4Vk/p+uP72j8VkZPIACV8Rbyu+4cTLFZY/LUTMZeOxKulwAFXsWvZ03niKGSgLQAIigkPjNwFsUAGSd5B0zt+lF0lPBnBUxUSc3MLpWc9Y+gm3mEAByEpKC3txx46sV6FLv4+keNdbmGK+VYIbibMj3jrRsy8odiaZ4iac78Dn3FsByPUULskBQT6wxhhxXcOJIDYgef6c7dVbd5J87tiyosFXkYzRrvU2ljE3VAAywzqSdgRwXIWvmq9EH7yMGQQl7QPgLRUL81iSZradtBSARMwv6TUAHAeRkr1Ivn2ZVlD4Qp6TSLzg6Tg4ykxRDkeetBSAxAHi699vJbjVXdNx2I5EvHgZVpEk29veAw9KjNd0EAbHecswp6HHWACS0LAkP5w5zebtEsU+QXLXoQ3VR/uSXgggldHeh/LtSZ7YR385tFEAUmFFSU6S5mRpKdmSpK+IRyuSbhvi8mM5rTz2Q0ia7rlI0EABSI2lIMkv7Y4jiclpJB9co6mFFZFkjnhzxcfE4cjeLk7+3LGyggpAaixZSY5AdCRiLCuKW3GAlWNIRifh6+GMLamra2+tvjK6wS94QAUgNQ0gybHsjmmPyY9IxvgQa/YyTDFJBwB4eaL1Y0g+YZjel7vVApCa9pPkvbtjr++cqPJoksfXbHIuxSQ5s71v2RwkNksc3+GtVbZx5V0UXQDSQHuSquJHPkfysQ2aHLxoBV2a+z+CpOdVZIYGCkAaLIvgGu6zyD0j1f7qjCljCkWVZA/k2LuHHRHXzIVws4EpaxctAKmtqusKSnoOgHcmqr2C5IENmx2kuCRzBfrVPCZZ5tPtU5kFIA21Gfb0DpqKsVadTzKVw7Zhj+2LS7IbTIrJdzOSZgIuEtFAAUiLpSHpMACpmJB1SXortlCR9GsAq0UG8ROS6y50gEvQeQFICyNJug+AHySqPpdkim6hRa/NqtTYXr2IZJVHb7NOMyxdANLSqJIcC3KPSPVPktylZdO9VKvh0r46yQt76SzjRgpAWhpXkqnITEk2Sy4j6UwhCxNJXwDwyLK96maCApCW+qsRz+0s8fYEnrtIunGIeoxRFhxG0uSmRSo0UADScolI8ou6UwHF5OkkP9yy+U7VapyRRus31mniA1QuAOmgVEk/S5Bavo7kqzo037qqJL/mH5to4JYkf9+6gwlVLADpYGxJ9rt6VKSJo0k6lmTuIskxHQdHOr6YZIoQZ+7jHXOHBSAdrCPJ0XmO0pslp5NMhbZ26DldVZKvmGP+Vd8gudVgnWfWcAFIB4NWuJ1cSdLsunMXSV8F8PBIx+8hufvcB7WkHRaAdDCcpK3N8JpoYjWSTts5V6l4o9mX5CFzHdASd1YA0sF4kuyq4eyEMbkPSafQmatIMr9iLPrxiSQ/PtcBLXFnBSAdjCfp9gBSX4gt5k00I8mEQKkM7NuQTH31Omgkv6oFIB1sGsguHZEXk7lHGNZ4n3GWdlM7F6mhgQKQGkpKFZHk94SY6/sTSB7TsYtG1UPmRL/PxMS0zaltYaP+ci9cANLRwpK8xfJWa5Y8k+QHO3bRqHoNL15HEF7QqNEJFy4A6Wh8Sb8CcMcRAeR+AMwGFZPixdvA5gUgDZQ1q6gkJ1y7a6SZuftj1fDDWrvk3a1v9AKQ+rr6h5LhkG46thht8uNJfqZDF42rhnzCv0hU3ISkqRuK1NBAAUgNJcWKSDJ/Rop9aVOSzqY+N5F0IwApDsXyUNjAGgUgDZS1ctFwGHbOXqclnbn7ArAqyctbdtG6miTHw9870sCVAJ4y1jSprSc9UMUCkIaKDbmxXgzA1GR+lIvJqSSrqJUb9l6vuKQ63O9OXbQfSQOmSEQDBSA1l0Ygn/GWysBw0oYq2YPkEVWFhvh3Sc4RfG6Ntp2+yCxa7yfpJHJFrqeBApCKJSFpTQAmyNkzkaTh+q144fm9wT5RCxFJ7wfwzJqdexvoGHuTATkTY5GggQKQGUtB0gMA+GvxOAD+303F1Mmfalqpz/KB990uJWbtbSIXAfgkgM8BcOzIn5tUzq1sAch16UQdt7EJALPb7gzgbh0MvSfJVGrSDk03qxp4Tcx81TbTo78sjpr0Td2JUzyvTBIgkm4dGKMcu71ZhwW08or1YvLDoOmjRyOS7gDAt20P7Dgof0lOBfBlAKf7j+SlHdscffWsARLy6K4Xzg5rAPDh1VRpGyQe99oYzb+yu5P09mR0ErhNXgHgRRUsWU3H/vPAmuv0Rn6cNMfIzxYRJNZ04HXLZwOQ8FV4CICNw7nBW6ZY5sO6+qkqZ1qzlyxLAJKkOwEwUJ4NIJYzq2rOdf79sgAcH/h9m3byWH88qiaztAAJ+2u/M6z4u3/PX4WY7kyV7G2GzxmfJ5mKB6nS/0L+XZJ9x0wp58QOKdbbPsdnD2Jv0U4J/z2HpPlURi1LA5DgQrEFgEeHG6a2B8+2BnGSuA8AeHcu7uKB3PMxAHYC8IiKh8+2eovV8/nFZyMTn36B5BV9d9BHe6MGiKRbBDAYFM4z68P1PMWgcIYQOxx+dhm/FnWVJckMuNbz40OuL+t+XuKv8LcCWPwWMxq+xFECRNI6gfjlWRXUxX0b0NGBjtc+0cAgmaI46Lvv0bQXDvXbBbAYNL4Jm5cYLH6HOZBkKq5lLuMZDUCC67jfIUxMs/1cZg/4M+/HNF9b+kvxTZIpT9g5DWs83QQXG1987BC4Dn1d3OWdqMnkfNZ7I8mvNanUZ9lRAETSlgCcDdBXskOJ7/HPNAgAOB7itDF9yoea9BDthsQQviXcFMDm4ep8yFsxhwzsPe/QAetuoQCRZLbYN4dzRl+2/GO4YvSvzu8CE9R5vqMvX4e+VPz37QQPZ78z2a3FIb9OuWofNt8sxvjZ2wzmowAcz5LKqt+m3WidhQAk7HFf7jeEHu7jHfL6HQAmo/SfX3gNkiIL1kDYNptp1+9T/tr4v113CXYAfROAg+bhgTx3gEjyr4od+WIBPVVm9Rnh5OAjdDzJH1dVKP8+Hg1IcoIL30g6K76vltveTHpX4LRKg+b4mhtAwmFvn4B+MyA1ET8oGVROmfklklc1qVzKjlMD4W3LvnC+Wjadna+am4h/LM3B8iaSfsDtXeYCkOAT5QXuX4wm4sej9wE4lKTdOopkqoHw5vUMAP4Rbbq78HnTIQa9O08ODhBJJrP0FeqGDWzrgKMDADhV/zUN6pWiS66BsNPwNb+/DP661BVvuZx3uNekeIMCRJKdBQ2OukE7PoD5VssHsEIRVndpZFpOkrdeBzVYP/5h3brPB97BABK+HGcBWL2m/ezn5CQCzlRYpGjgWg2Ec4oJf7yjuF0NtTgJxeYkz6lRtrLIIAAJ9+JfD562VYO4JNxG+EtTpGhgpgbCbsRxN742rhKfV03D3flMMhRA3hGSHFRNxD5PztH066qC5d+LBiSZFOgj4darSiF2q9+qq4Np7wCR9HQAdTKaHxVCVEcfE1BlifLv89WAJD8yO/1S1fp9K0nfirWWqg4aNSzJ9MI/BVDlKu1D+MsaNV4KFw2spAFJdp7000HVWuvEqNU3QHwfXUUxfADJVxZrFw101YAku654zaUcJZ0nYJ22t6K9AUTScwEcXjHpt5Pcq6tiSv2igRUakORoSMePpORIkn6pbyy9ACQ4H16YYFrywByR50RsRYoGetWApAMB7F/R6H1J1knH+nfN9AUQe+X6QScmFzufLUlnuyhSNNCrBoLXsGN8Nko0/EmSuzTtuDNAJHn/532eXUpish1JX+kWKRoYRAMhtujsikN7Y976PgBSda17HElnzihSNDCoBiTtC+DgRCeNz8B9AMTBSs5WGJP1SszGoOuiNB40IMlhFD5nrB1Rit1Q7kjyD3WV1gkgIQGZI/piUr4edS1RyvWiAUnOhOMQiZjsSvITdTvrCpDnhAyDsf46PdLUnUQpVzSwQgPhTGzXpVikYqMr364AcVp882jMkktIzjOfUlklRQPXakCSvyD+ksySi0na46OWdAWI3z5iOZKOIOncr0WKBuaqgRqPh/ci6cz0ldIaICE3Uir9ypNIHl05glKgaKBnDQRCpBS78FNJ2lm2UroAZFsAX0n0sBbJ8ytHUAoUDQygAUkOwXXetVnyGpL/UafbLgBJHdCvJlnlZVlnfKVM0UArDUgy05fzCs+SD5DcrU7DXQBiIhb75M+S75M0i1ORooGFaECSHWftQDtLnE8tBp6/K98FIG8EEIvpcBJo59stUjSwEA1Ism+gfQRnidl7q8Iyrq3XBSCpAZhy62EL0UzptGjguqveQwIn4ygB4qD5I4ulFqoB3zA6LatTKZ09jzy2K89WkhnAnLanz+TVTRTqJIUxF6iTSG5Tp7GhviB1+i5l5qcBx/37RtGAcTocvwH80Em/m/gl1RluSKxwqFl/65RfUJkCkAUpftm6tdOe0zM55ZLDEc7qmuNW0ntDnt0x66IAZMzWGfHYnKPMfIz2gnAAUmOR5IyYN29ccb4V5gKQ/QC8Yb7zKr3NUQPOiun8Zh+qy7cSkpSbtOgGcxxnm64+Q9Lno0rpcgYxV525/YrkrQFfuJjV6Zg605RkLvQmSafrNNt3mf1J1vpxbw0Qj7jiMabvSZX2FqsB8wTuRtKH+6hI8g+nCY6cBXGM4h/1LUn6dq9SOgEkgOSpgQH17l3eVSpHWgo01YATPTuyrs/zgCPynD39jAqQOKv/3oGvcJWmAx+ovBOGmMDVYbe1mYw7A2SgyZRme9KAJAcOOSTB7xLmaHHmDz/irtayC/PH21F1ElIAMgkz/+MkJdlXzo9p2wHYogGZ6jUk+/wqjdoCBSCjNs98BhcS/xksTgq9cUWvk4oULQCZzxpcml4kbQ3AsRL+qswSE2b6in8SUgAyCTM3n6Qkf1GcztNXtjcMLZzgHAR9u6c0H938ahSAzE/XS9lTePzzwf6yPrn/lkUZBSDLYqkyzoVooABkIWovnS6LBgpAlsVSZZwL0UAByELUXjpdFg0UgCyLpco4F6KBvwGX7/QygkPFuQAAAABJRU5ErkJggg==');
          background-size: 50%;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .psw-icon{
          width: 44px;
          height: 44px;
          background-color: #c7c7c7;
          background-image:url('data:image/png;base64,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');
          background-size: 50%;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .name-input{
          width: 286px;
          height: 43px;
          line-height: 44px;
          border: none;
          outline: none;
          padding-left: 20px;
          padding-right: 20px;
          font-size: 14px;
          font-family: "SF Pro Text"
        }
      }
      .forget{
        width: 100%;
        text-align: right;
        font-size: 13px;
        font-family: "SF Pro Text";
        color: #888888;
        a:hover{
          color: rgb(255, 85, 85);
        }
      }
      .submit-button-container{
        margin-top: 30px;
        margin-bottom: 35px;
        width: 100%;
        height: 40px;
        button{
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          cursor: pointer;
          font-family: 'SF Pro Text';
          background-color: rgb(59, 128, 255);
          color: #fff;
        }
        button:hover{
          background-color: rgb(96, 147, 241);
        }
      }
    }
  }
}
</style>
