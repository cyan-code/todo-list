<template>
  <div>
    <div class="weather is-size-4">{{countryName}} {{cityName}}</div >
    <div class="weather is-size-5">{{nowTemp}}&#176;</div >
    <div class="weather is-size-6">{{nowWeather}}</div>
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
      console.log(res);
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