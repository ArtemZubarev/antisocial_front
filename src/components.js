import Vue from 'vue'

import MainHeader from './components/MainHeader.vue'
import AdminHeader from './components/admin/AdminHeader.vue'
import Sidebar from './components/Sidebar.vue'

Vue.component('main-header', MainHeader)
Vue.component('admin-header', AdminHeader)
Vue.component('sidebar', Sidebar)

export default Vue
