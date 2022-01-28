function initVueDefault(e){
    const pagina = {
        data() {
            return {
                _Vars: _Vars
            }
        }
    }

    Vue.createApp(pagina).mount(e);
}