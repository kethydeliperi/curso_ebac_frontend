document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const picture = document.querySelector('#pic');
    const repositories = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const profile = document.querySelector('#profile');

    fetch('https://api.github.com/users/kethydeliperi')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        name.innerHTML = json.name;
        username.innerHTML = json.login;
        picture.src = json.avatar_url;
        repositories.innerHTML = json.public_repos;
        followers.innerHTML = json.followers;
        following.innerHTML = json.following;
        profile.href = json.html_url;
    })
    .catch(function(error){
        alert("Informações incoerentes, verifique e tente mais tarde.");
    })
})