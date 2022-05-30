const app = new Vue({
    el: '#app',
    data: {
        mail: '',
    
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {

            this.mail = (response.data.response);
        })
    }
});