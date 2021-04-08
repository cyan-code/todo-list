<template>
  <div>
    <div class="weather is-size-5">{{nowTemp}}&#176; {{nowWeather}} </div >
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
    this.$http.getWeather()
      .then(res => {
        this.countryName = res.location.country
        this.cityName = res.location.city
        this.nowTemp = res.now.temp
        this.nowWeather = res.now.text
      })
      .catch(err => {console.log(err);})
  }
}
</script>

<style scoped>

</style>