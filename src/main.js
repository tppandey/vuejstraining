import Vue from 'vue'
import App from './App.vue'

import router from './router/router'

Vue.config.productionTip = false

console.log("router", router)


fetch("https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/series-348?fields=tags&domain=IN", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
  }
}).then(function(d) {
  return d.json();
}).then(function(data) {
  console.log(data)
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
