var gitApi = document.getElementById('git_api');

gitApi.addEventListener('submit',function(git){
    git.preventDefault();
    var searchValue = document.getElementById('search').value
    var newName = searchValue.split(' ').join('')

    fetch("https://api.github.com/users/"+newName)


    .then((result) => result.json())
    .then((data) => {
        document.getElementById("result").innerHTML = `
            <h2>Username : ${data.login}</h2>

            <div class='profile-grid'>
                <div class='pitem1'>
                    <div class='title'>Profile Image</div>
                    <img src="${data.avatar_url}" class='profile-img'/>
                </div>
                <div class='pitem2'>
                    <div class='title'>Profile Image</div>
                    <img src="${data.avatar_url}" class='profile-img'/>
                </div>
            </div>

            
            <div class='bio'>
            
            </div>
        `
    })
})
