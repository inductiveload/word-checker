import settingsModule from './modules/settings';
import checkerModule from './modules/checker';

import {createStore} from 'vuex';

const store = createStore({
    modules:{
        checker: checkerModule,
        users: settingsModule
    }
});

export default store;