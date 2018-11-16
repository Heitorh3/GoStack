
class App {
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event){
        event.preventDefault();

        this.repositories.push({
            name:'',
            description:'',
            avatar_url:'',
            html_url:''
        });
        console.log(this.repositories);
    }
}
new App();
/*
class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response);
        }catch(err){
            console.warn(err);
        }
    }
}

Api.getUserInfo('heitorh3');
*/