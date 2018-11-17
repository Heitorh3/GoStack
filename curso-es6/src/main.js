import api from './api';

class App {
    constructor(){
        this.repositories = [];
        this.inputEl = document.querySelector('input[name=repositoryName]');
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event){
        event.preventDefault();

        const repoName = this.inputEl.value;

        if(repoName.length === 0 ){
            return;
        }

        this.setLoading();

        try{
            const response = await api.get(`search/repositories?q=${repoName}`);
            //const response = await api.get(`user/repos/${repoName}`);
            //const {name, description, html_url, owner: {avatar_url}} = response.data;
            
            console.log(response.data);
            
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            this.render();
        }catch(error){
            alert('Nao foi possivel locar o repositorio');
        }
        this.setLoading(false);
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEL = document.createElement('span');
            loadingEL.appendChild(document.createTextNode('loading'));
            loadingEL.setAttribute('id','loading');

            this.formEl.appendChild(loadingEL);
        }else{
            document.getElementById('loading').remove();
        }
    }
    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}
new App();
