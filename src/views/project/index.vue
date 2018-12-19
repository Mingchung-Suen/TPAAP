<template>
  <div>
    <Header />
    <Banner />
    <div class="content-main">
      <div v-loading="listLoading" class="container">
        <div class="title">
          <div :class="titleClass1" @click="selectTitle(1)">{{ $t('project.all') }}</div>
          <div :class="titleClass2" @click="selectTitle(2)">{{ $t('project.my') }}</div>
        </div>
        <list :list-data="list"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import List from '@/components/Project'
import { fetchProjectList } from '@/api/projects'
export default {
  name: 'ProjectList',
  components: {
    Header,
    Banner,
    'list': List
  },
  data() {
    return {
      list: [],
      listLoading: false,
      titleClass1: 'text text-select',
      titleClass2: 'text'
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    selectTitle(e) {
      // console.log(e)
      if (e === 1) {
        this.titleClass1 = 'text text-select'
        this.titleClass2 = 'text'
      } else {
        this.titleClass2 = 'text text-select'
        this.titleClass1 = 'text'
      }
    },
    async fetchList() {
      try {
        this.listLoading = true
        const res = await fetchProjectList()
        this.listLoading = false
        this.list = res.data
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-main{
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  padding-top: 30px;
  background-color: #f5f5f5;
  .container{
    width: 75%;
    margin: 0 auto;
    .title{
      background-color: #fff;
      width: 100%;
      height: 60px;
      padding-left: 20px;
      padding-top: 15px;
      padding-bottom: 15px;
      margin-bottom: 30px;
      display: flex;
      .text{
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-family: 'SF Text Pro';
        font-size: 15px;
        cursor: pointer;
      }
      .text-select{
        border-bottom: 2px solid rgb(66, 112, 219);
        font-size: 16px;
        font-weight: bold;
        color: rgb(66, 112, 219);
      }
    }
    .text:hover{
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>

