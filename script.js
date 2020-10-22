const API_URL = 'https://api.vk.com/method/users.get?user_id=210700286&v=5.52&access_token=16ccccb8e628800ba653f224294b50b8d46f4f64a6b45efadd82f2e7b86fb48cd5eea354a28b9445ec72f';

function makeGETRequest(url, callback) {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
            // console.log('-----------');
            callback(xhr.responseText);
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
     }

    
let array = [];

    fetchGoods() {
        makeGETRequest(API_URL, (goods) => {
            array = JSON.parse(goods);
            console.log(array);
           
        });
    

//---------------------------------------------------------------------------
fetchGoods()
//--------------------------------------------------------------------------
