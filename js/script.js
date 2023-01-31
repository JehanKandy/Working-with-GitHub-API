var gitApi = document.getElementById('git_api');

gitApi.addEventListener('submit',function(git){
    git.preventDefault();
    var searchValue = document.getElementById('search').value
    var newName = searchValue.split(' ').join('')

    fetch("https://api.github.com/users/"+newName)


    .then((result) => result.json())
    .then((data) => {
        document.getElementById("result").innerHTML = `
            <img src="${data.avatar_url}"/>
            <h2>${data.followers}</h2>
        `
    })
})
