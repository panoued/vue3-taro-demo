import { createStore } from 'vuex';

export default createStore({
    state: {
        langId: null,
		token: null
    },
    mutations: {
        setLangId(state, langId) {
        	state.langId = langId;
    	},
		setToken(state, token) {
        	state.token = token;
    	}
    },
    actions: {
    },
    modules: {
    }
});
    