var gitApi = document.getElementById('git_api');

gitApi.addEventListener('submit',function(git){
    var searchValue = document.getElementById('search').value
    var newName = searchValue.split(' ').join('');

    fetch("https://api.github.com/users/"+newName)
    //result convert to json

    .then((result) => result.json())
    .then((data) => {
        console.log(data)
    })

})
