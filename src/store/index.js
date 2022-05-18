import settingsModule from './modules/settings';
import {createStore} from 'vuex';

const store = createStore({
    modules:{
        users: settingsModule
    }
});

export default store;