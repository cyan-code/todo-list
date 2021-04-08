<template>
  <div>
    <footer class="footer animate__animated animate__fadeInUp">
      <div class="content has-text-centered">
        <p class="is-size-7">
          <b>{{system | showVersion}}</b>&ensp;&nbsp;
          IP:<b>{{ip ? ip : '未知'}}</b>&ensp;&nbsp;
          ISP:<b>{{isp ? isp  : '未知' | showChnIsp}}</b>
        </p>
        <p>
          <strong>TODOLIST</strong> by
          <a href="https://gitee.com/cyanzhn">Cyan</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isp: '',
      ip: '',
      system: ''
    }
  },
  methods: {
    getIp() {
      fetch('http://ip-api.com/json/?lang=zh-CN')
        .then(resp => resp.json())
        .then(resp => {
          if(resp.status === 'success') {
            this.isp = resp.isp
            this.ip = resp.query
          }
          else {console.log(resp.status);}
        })
        .catch(err => console.log(err))
    },
    getBrowser() {
      var myReg = /\((.+?)\)/
      this.system = navigator.userAgent.match(myReg)[1]
      
    }
  },
  filters: {
    showChnIsp(v) {
      switch (v) {
        case "China Mobile":
          return '中国移动'
          break;
        case 'China Unicom':
          return '中国联通'
          break;
        case 'China Telecom':
          return '中国电信'
          break;
      
        default: return v
          break;
      }
    },
    showVersion(v) {
      if (v.indexOf('Macintosh') != -1) return 'MACOS'
      if (v.indexOf('iPhone') != -1) return 'iOS'
      if (v.indexOf('Windows') != -1) return 'Windows'
    }
  },
  created() {
    this.getIp()
    this.getBrowser()
  }
};
</script>

<style>
</style>