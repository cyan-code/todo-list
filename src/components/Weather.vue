<template>
  <div>
    <div class="weather is-size-4">{{nowTemp}}&#176;</div >
    <div class="weather is-size-5">{{nowWeather}}</div>
    <div class="weather is-size-5">{{countryName}} {{cityName}}</div >
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data() {
    return {
      countryName: '中国',
      cityName: '北京',
      nowTemp: '',
      nowWeather: ''
      
    }
  },
  created() {
    this.$myBus.$on('sendWeather', (res)=> {
      this.countryName = res.weatherInfo.location.country
      this.cityName = res.weatherInfo.location.city
      this.nowTemp = res.weatherInfo.now.temp
      this.nowWeather = res.weatherInfo.now.text

    })
  }
}
</script>

<style scoped>
.weather {
  text-align: right;
}
</style>