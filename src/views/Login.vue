<template>
  <div>
    <div class="columns my-5 is-centered">
        <div class="column is-4 mx-4">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="用户名" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="密码" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-dark">登录</button>
              <button class="button is-dark ml-2">注册</button>
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>