import Vue from 'vue'

import MainHeader from './components/MainHeader.vue'
import AdminHeader from './components/admin/AdminHeader.vue'
import Sidebar from './components/Sidebar.vue'
import NavEffect from './components/NavigationEffect.vue'

Vue.component('main-header', MainHeader)
Vue.component('admin-header', AdminHeader)
Vue.component('sidebar', Sidebar)
Vue.component('nav-effect', NavEffect)

export default Vue
