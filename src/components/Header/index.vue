<template>
  <div class="main">
    <div class="container">
      <div class="content-left">
        <ul>
          <li>
            <div>
              <a href="javascript:;">{{ $t('header.home') }}</a>
            </div>
          </li>
          <li>
            <div>
              <a href="javascript:;" @click="handleList">项目列表</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-right">
        <ul>
          <li>
            <div>
              <a href="javascript:;">个人中心</a>
            </div>
          </li>
          <li>
            <div>
              <a href="javascript:;" @click="logOut">退出</a>
            </div>
          </li>
        </ul>
        <LangSelect class="lang-select"/>
      </div>
    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
// import { logout } from '@/api/login'
export default {
  name: 'Header',
  components: {
    LangSelect
  },
  data() {
    return {

    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    },
    handleList() {
      this.$router.push({ path: '/project' })
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  height: 30px;
  background-color: #e3e4e5;
  .container{
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    .content-left, .content-right{
      width: 100%;
      height: 100%;
      ul{
        margin: 0;
        display: flex;
        li{
          list-style-type: none;
          padding-left: 10px;
          padding-right: 10px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #666666;
          font-family: 'SF Text Pro';
          font-size: 13px;
          a:hover{
            color: rgb(66, 112, 219)
          }
        }
      }
    }
    .content-right{
      display: flex;
      justify-content: flex-end;
    }
    .lang-select{
      width: 80px;
      line-height: 30px;
      height: 30px;
      margin-left: 10px;
      .el-dropdown-menu{
        top: 30px!important;
      }
    }
  }
}
</style>

