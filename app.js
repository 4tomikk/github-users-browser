const API_URL = `https://api.github.com/users`;
const NAMES = ["4tomikk","khalidengit","midudev","github","kodigo"];

const showUSerData = document.querySelector("#showUSerData");
const inputUsername = document.querySelector("#username");
document.querySelector("#submit").addEventListener('click',browse);

function browse(){
    fetch(`${API_URL}/${inputUsername.value}`)
    .then(response => response.json())
    .then((user) => {
            console.log(`${user.bio}`);
            showUSerData.innerHTML = `<article id="userCard">
            <a href="${user.html_url}" id="avatar"><img src="${user.avatar_url}"></a>
                <span id="name">${user.login}</span>
                <p id="bio">${user.bio}</p>
           </article>`; 
    });
}
