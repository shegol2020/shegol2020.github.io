    var user = [];
    var script = document.createElement('SCRIPT');
    script.src = "https://api.vk.com/method/users.get?user_ids=7451,254&fields=photo_100&v=5.124&callback=callbackFunc&access_token=c4f995f2c4f995f2c4f995f204c48d0b16cc4f9c4f995f29b61c43eb577258c6a7f916c";
    console.log(script.src);
    document.getElementsByTagName("head")[0].appendChild(script);
    function callbackFunc(result) {
        user=result; 
    }


    class User {
        constructor(first_name, last_name, photo_100) {
            this.first_name = first_name;
            this.last_name = last_name;
            this.photo_100 = photo_100;
            
        }
        renderUser() {
            return `<div class="user-info"><p>${this.first_name} ${this.last_name}</p>
 <div class="users-photo"><img src="${this.photo_100}"></div>
</div>`;                   
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
                    const userInfo = new User(i.first_name, i.last_name, i.photo_100);
                console.log(userInfo);
                    listHtml += userInfo.renderUser();
                });
            document.querySelector('.users-list').innerHTML = `<div class="test_container">${listHtml}</div>`
            }
    }
function f1() {
    let myUser = new UserList();

    myUser.fetchUser(() => {
        myUser.renderList();
    })
}
