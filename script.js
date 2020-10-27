    var user = [];
    var script = document.createElement('SCRIPT');
    script.src = "https://api.vk.com/method/users.get?user_ids=254,193990&fields=photo_100&v=5.124&callback=callbackFunc&access_token=ad29adf1ad29adf1ad29adf1efad371086aad29ad29adf1f67c3f137270830a839f4c27";
    console.log(script.src);
    document.getElementsByTagName("head")[0].appendChild(script);
    function callbackFunc(result) {
        user=result; 
    }


    class User {
        constructor(first_name, last_name) {
            this.first_name = first_name;
            this.last_name = last_name;
        }
        renderUser() {
            return `<div class="user-info"><p>${this.first_name}${this.last_name}</p></div>`;                   
        }
    }

    class UserList {
        constructor() {
            this.goods = [];
        }
        fetchUser(cb) { 
            this.list = user.response;
            cb();
        }
        renderList() {
            let listHtml = '';
            //console.log(this.list);
            //console.log(this.list.first_name);
            this.list.forEach(i => {
                    const userInfo = new User(i.first_name, i.last_name);    
                    listHtml += userInfo.renderUser();
                });
            document.querySelector('.users-list').innerHTML = `<h2>Пользователи</h2> ${listHtml}`
            }
    }
function f1() {
    let myUser = new UserList();

    myUser.fetchUser(() => {
        myUser.renderList();
    })
}
