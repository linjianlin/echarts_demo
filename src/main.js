
import App from './App.vue'
import { createApp, h } from 'vue';
import { plugin } from 'echarts-for-vue';
import * as echarts from 'echarts';

const app = createApp(App);
app.use(plugin, { echarts, h }); 
app.mount('#app')
