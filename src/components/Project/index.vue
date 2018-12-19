<template>
  <div class="main-list">
    <div
      v-for="(item, index) in listData"
      :key="item.id"
      class="list-item"
    >
      <div class="header">
        <div class="time">{{ 1545194772 | timeFormat }}</div>
        <div>{{ $t('project.num') }} tzp-2018-{{ item.id }}</div>
        <div class="titles">
          <div class="manager-title">{{ $t('project.title_manager') }}</div>
          <div class="party_a-title">{{ $t('project.title_client') }}</div>
          <div class="status-title">{{ $t('project.title_status') }}</div>
        </div>
      </div>
      <div class="detail">
        <div class="name">{{ item.name }}</div>
        <div class="manager">
          <div class="manager-name">
            <div class="manager-icon"/>
            <div class="manager-text"><a target="_blank" :href="'https://git.tiaozhan.com/' + item.overall_charge.netid">{{ language==='zh' ? item.overall_charge.name : item.overall_charge.netid }}</a></div>
          </div>
          <div class="manager-department">{{ deptFilter(item.overall_charge.dep) }}</div>
        </div>
        <div class="manager party_a">
          <div class="party_a-container">
            <div class="party_a-icon" />
            <div class="party_a-text">{{ item.party_a }}</div>
          </div>
        </div>
        <div class="status">
          <div :class="2 | iconFilter"/>
          <div class="status-text"> {{ langChange(2) }}</div>
        </div>
        <div class="detail-text">
          <a href="javascript:;" @click="handleDetail(index)">{{ $t('project.detail') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parseTime } from '@/utils/index'

export default {
  name: 'List',
  filters: {
    timeFormat(time) {
      return parseTime(time, '{y}-{m}-{d} {h}:{i}:{s}')
    },
    iconFilter(status) {
      const map = {
        '0': 'status-waiting status-icon',
        '1': 'status-acting status-icon',
        '2': 'status-checking status-icon',
        '3': 'status-accepted status-icon'
      }
      return map[status]
    }
  },
  props: {
    listData: {
      type: Array,
      required: true
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  data() {
    return {
      statusIcon: ''
    }
  },
  methods: {
    langChange(status) {
      const map = {
        '0': this.$t('project.waiting'),
        '1': this.$t('project.acting'),
        '2': this.$t('project.checking'),
        '3': this.$t('project.accepted')
      }
      return map[status]
      // return this.$t(str)
    },
    deptFilter(dept) {
      const map = {
        '0': this.$t('department.product'),
        '1': this.$t('department.tech'),
        '2': this.$t('department.visual'),
        '3': this.$t('department.video')
      }
      return map[dept]
    },
    handleDetail(id) {
      // console.log(this.listData)
      var status = this.listData[id].status
      const did = this.listData[id].id
      // console.log(status)
      this.$router.push({ name: 'Detail', params: { status, did }})
    }
  }
}
</script>

<style lang="scss" scoped>
.status-accepted{
  width: 30px;
  height: 30px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/accepted.png')
}
.status-acting{
  width: 30px;
  height: 30px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/acting.png')
}
.status-checking{
  width: 30px;
  height: 30px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/checking.png')
}
.status-waiting{
  width: 30px;
  height: 30px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/waiting.png')
}
.main-list{
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  border-top: 2px solid rgb(66, 112, 219);
  .list-item{
    width: 100%;
    height: 100%;
    // padding: 10px;
    background-color: #fff;
    border: 1px solid #e9e9e9;
    margin-bottom: 25px;
    .header{
      width: 100%;
      height: 30px;
      padding-left: 10px;
      background-color: #f5f5f5;
      line-height: 30px;
      color: #888888;
      font-family: 'SF Pro Text';
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      .titles{
        width: 60%;
        display: flex;
        justify-content: space-between;
        div{
          text-align: center;
        }
        .manager-title{
          width: 100px;
          margin-left: 110px;
        }
        .status-title{
          width: 100px;
          margin-right: 95px;
        }
        .party_a-title{
          width: 100px;
          margin-left: 25px;
        }
      }
    }
    .detail{
      width: 100%;
      height: 100px;
      display: flex;
      min-width: 800px;
      .name{
        padding: 10px;
        width: 730px;
        font-size: 14px;
        font-family: 'SF Pro Text';
        border-right: 1px solid #d7d7d7;
      }
      .manager{
        padding: 20px;
        border-right: 1px solid #d7d7d7;
        position: relative;
        .manager-name{
          display: flex;
          width: 100px;
          justify-content: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #d7d7d7;
          .manager-icon{
            width: 20px;
            height: 20px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url('../../../static/image/manager.png')
          }
          .manager-text{
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            margin-left: 5px;
            a:hover{
              color: rgb(66, 112, 219);
              text-decoration: underline
            }
          }
        }
        .manager-department{
          padding: 15px;
          text-align: center;
          font-size: 12px;
          color: #888888
        }
        .party_a-container{
          // display: flex;
          width: 150px;
          text-align: center;
          position: relative;
          .party_a-icon{
            margin: 0 auto;
            width: 30px;
            height: 30px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url('../../../static/image/party_a.png')
          }
          .party_a-text{
            font-size: 12px;
            color: #888888;
            font-family: 'SF Pro Text';
            height: 45px;
            line-height: 45px;
            // padding-top: 15px;
          }
        }
      }
      .status{
        width: 120px;
        height: 100%;
        padding: 20px;
        border-right: 1px solid #d7d7d7;
        position: relative;
        .status-icon{
          margin: 0 auto;
        }
        .status-text{
          text-align: center;
          padding-top: 15px;
          font-size: 13px;
          color: #888888;
          font-family: 'SF Pro Text'
        }
      }
      .detail-text{
        width: 120px;
        padding: 20px;
        text-align: center;
        font-size: 13px;
        color: #888888;
        font-family: 'SF Pro Text';
        a:hover{
          color: rgb(66, 112, 219);
          text-decoration: underline
        }
      }
    }
  }
}
</style>

