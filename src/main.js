import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';

import './assets/main.css';
import TheNavigation from './components/layout/TheNavigation.vue';
import MainFrame from './components/layout/MainFrame.vue';
import VeeForm from './components/form/units/VeeForm.vue';
import RadioButton from './components/form/units/RadioButton.vue';
import FormField from './components/form/units/FormField.vue';

import './config/vee-validate/rules';
import './config/vee-validate/messages';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('TheNavigation', TheNavigation);
app.component('MainFrame', MainFrame);
app.component('VeeForm', VeeForm);
app.component('RadioButton', RadioButton);
app.component('FormField', FormField);

app.mount('#app');
