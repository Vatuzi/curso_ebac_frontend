document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const user = document.querySelector('#user');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');


    fetch('https://api.github.com/users/vatuzi')
        .then(function(resposta){
            if(resposta.status == '404'){
                throw new Error('Erro na recuperação do perfil!!');
            }
            return resposta.json();
        })
        .then(function(json){
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            user.innerText = json.login;
            repositorios.innerText = json.public_repos;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            link.href = json.html_url;
        })

})