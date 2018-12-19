<template>
  <div>
    <div class="info-container">
      <div>
      {{ time | timeFormat }}
      </div>
      <div>aisdjasdijlas</div>
    </div>
  </div>
</template>

<script>
import { parseTime } from '@/utils/index'
export default {
	name: 'DetailInfo',
	data() {
		return {
      time: 154447322700
		}
  },
  filters:{
    timeFormat(time) {
      return parseTime(time * 10, '{y}-{m}-{d} {h}:{i}:{s}:' + time % 100)
    },
  },
  created() {
    // this.changeTime()
  },
  methods:{
    changeTime() {
      setInterval(() => {
        this.time ++
      },10)
    }
  }
}
</script>

<style lang="scss" scoped>
.info-container{
	width: 100%;
  height: 100%;
  margin-top: 30px;
  background-color: white;
}
</style>

