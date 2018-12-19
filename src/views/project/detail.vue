<template>
  <div>
    <Header />
    <Banner />
    <div class="content">
      <div class="container">
        <div class="status">
          <div class="brief">
            <div class="id">{{ project.id }}</div>
            <div class="name">{{ project.name }}</div>
            <div :class="iconFilter(project.status, -1)"/>
            <div class="status-text">
              {{ statuLangFilter(project.status) }}
            </div>
          </div>
          <div class="status-flow">
            <div class="statusBox">
              <div :class="iconFilter(0, project.status)"/>
              <div :style="textFilter(0, project.status)" class="status-text">
                {{ statuLangFilter(0) }}
              </div>
              <div class="time">{{ 1544470224 | timeFormatter }}</div>
            </div>
            <div :style="dashFilter(0, project.status)" class="dash"/>
            <div class="statusBox">
              <div :class="iconFilter(1, project.status)"/>
              <div :style="textFilter(1, project.status)" class="status-text">
                {{ statuLangFilter(1) }}
              </div>
              <div class="time">{{ 1544470224 | timeFormatter }}</div>
            </div>
            <div :style="dashFilter(1, project.status)" class="dash" />
            <div class="statusBox">
              <div :class="iconFilter(2, project.status)"/>
              <div :style="textFilter(2, project.status)" class="status-text">
                {{ statuLangFilter(2) }}
              </div>
              <div class="time">{{ 1544470224 | timeFormatter }}</div>
            </div>
            <div :style="dashFilter(2, project.status)" class="dash" />
            <div class="statusBox">
              <div :class="iconFilter(3, project.status)"/>
              <div :style="textFilter(3, project.status)" class="status-text">
                {{ statuLangFilter(3) }}
              </div>
              <div class="time">{{ null | timeFormatter }}</div>
            </div>
          </div>
        </div>
        <DetailInfo />
        <ProjectActions />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { parseTime } from '@/utils/index'
import ProjectActions from '@/components/project/actions'
import DetailInfo from '@/components/project/info'
export default {
  name: 'ProjectDetail',
  components: {
    Header,
    Banner,
    ProjectActions,
    DetailInfo
  },
  filters: {
    statusTextFilter(status) {

    },
    timeFormatter(time) {
      return time === null ? '' : parseTime(time, '{y}-{m}-{d} {h}:{i}:{s}')
    }
  },
  data() {
    return {
      project: {
        id: 'tz-2018-8024683478',
        status: 2,
        name: '挑战网项目分发与验收平台'
      }
    }
  },
  created() {
    // this.project.status = this.$route.params.status
    // this.project.id = this.$route.params.id
    console.log(this.project)
  },
  methods: {
    statuLangFilter(status) {
      const map = {
        '0': this.$t('project.waiting'),
        '1': this.$t('project.acting'),
        '2': this.$t('project.checking'),
        '3': this.$t('project.accepted')
      }
      return map[status]
    },
    iconFilter(s, status) {
      const map = {
        '0': s > status ? 'status-waiting status-icon' : 'status-waiting-passed status-icon',
        '1': s > status ? 'status-acting status-icon' : 'status-acting-passed status-icon',
        '2': s > status ? 'status-checking status-icon' : 'status-checking-passed status-icon',
        '3': s > status ? 'status-accepted status-icon' : 'status-accepted-passed status-icon'
      }
      return map[s]
    },
    dashFilter(s, status) {
      return s < status ? 'border-top: 3px solid #1296db;' : ''
    },
    textFilter(s, status) {
      return s <= status ? 'color: #1296db' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.status-accepted{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/accepted.png')
}
.status-accepted-passed{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/accepted-passed.png')
}
.status-acting{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/acting.png')
}
.status-acting-passed{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/acting-passed.png')
}
.status-checking{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/checking.png')
}
.status-checking-passed{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/checking-passed.png')
}
.status-waiting{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/waiting.png')
}
.status-waiting-passed{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../../../static/image/waiting-passed.png')
}
</style>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  padding-top: 30px;
  background-color: #f5f5f5;
  .container{
    width: 75%;
    margin: 0 auto;
    .status{
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-top: 2px solid rgb(66, 112, 219);
      display: flex;
      .brief{
        width: 250px;
        height: 100%;
        padding: 20px;
        border-right: 1px solid #d7d7d7;
        text-align: center;
        .id{
          font-size: 13px;
          color: #888888;
          font-family: 'SF Pro Text'
        }
        .name{
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          font-family: 'SF Pro Text';
          color: #888888
        }
        .status-icon{
          width: 30px;
          height: 30px;
          margin: 0 auto;
          margin-top: 30px;
        }
        .status-text{
          padding: 30px;
          padding-top: 20px;
          font-family: 'SF Pro Text';
          font-size: 18px;
          font-weight: bold;
          color: #888888
        }
      }
      .status-flow{
        padding: 30px;
        display: flex;
        padding-top: 40px;
        padding-left: 50px;
        margin: 0 auto;
        .dash{
          width: 100px;
          margin: 15px;
          margin-top: 30px;
          border-top: 3px solid #888888;
        }
        .statusBox{
          width: 80px;
          .status-icon{
            margin: 0 auto;
            width: 60px;
            height: 60px;
            margin-bottom: 20px;
          }
          .status-text{
            margin: 0 auto;
            text-align: center;
            color: #888888;
            font-family: 'SF Pro Text';
            font-weight: bold;
            margin-bottom: 5px;
          }
          .time {
            font-size: 12px;
            text-align: center;
            font-family: 'SF Pro Text';
            color: #888888
          }
        }
      }
    }
  }
}
</style>

