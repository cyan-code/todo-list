<template>
  <div>
    <!-- 头部标题 -->
    <section class="hero is-dark animate__animated animate__bounceInDown">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-flex is-6">
              <figure class="image is-64x64 mr-4">
                <img src="../assets/ztw.jpg" alt="ZTW">
              </figure>
              <div class="txt">
                <p class="title">
                  待办事项
                </p>
                <p class="subtitle">
                  Created By <a href="https://gitee.com/cyanzhn">Cyan</a>
                </p>
              </div>
            </div>
            <div class="column is-4-mobile is-offset-4 is-2-desktop">
              <Weather />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>

<script>
import Weather from './Weather'
export default {
  name: 'Header',
  components: {
    Weather
  }
}
</script>

<style>

</style>