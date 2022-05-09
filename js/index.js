/*
 * @Author: 18481024364 1842426719@qq.com
 * @Date: 2022-05-06 15:02:49
 * @LastEditors: 18481024364 1842426719@qq.com
 * @LastEditTime: 2022-05-09 14:03:26
 * @FilePath: \新建文件夹\js\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let productList = [{
    id: 1001,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 1'
},{
    id: 1002,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 2'
},{
    id: 1003,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 3'
},{
    id: 1004,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 4'
},{
    id: 1005,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 5'
},{
    id: 1006,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 6'
},{
    id: 1007,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 7'
},{
    id: 1008,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 28'
},{
    id: 1009,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 9'
},{
    id: 1010,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 10'
},{
    id: 1011,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 11'
},{
    id: 1012,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 22'
},{
    id: 1013,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 13'
},{
    id: 1014,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 14'
},{
    id: 1015,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 15'
},{
    id: 1016,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 16'
},{
    id: 1017,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 17'
},{
    id: 1018,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 18'
},{
    id: 1019,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 19'
},{
    id: 1020,
    name: 'java高级编程',
    img: 'https://api.cnmwc.net/test/ciyuanmeitu/? 20'
},

]

/**
 * 动态渲染列表数据
 */
function loadProductList() {
    let str = ''
    productList.forEach(item => {
        let strItem = `<div class="product-item "  style="${item.color}">
                            <div class="webkit"></div>
                            <div class="webkiy" >
                            <div class="emoji">
                                <div class="emoji-k">
                                    <img src="${item.img}">
                                </div>
                                <div class="emoji-xbo">${item.name}</div>
                                <div class="emoji-ybo">ID:${item.id}</div>
                            </div>
                            <a href="${item.url}"> <button class="shiny scopes">查看</button></a>
                            </div>
                         </div>`
        str += strItem
    })

    $('.product-list').html(str)

}
loadProductList()
// function Color(elem) {
//     this.elem = elem
//     this.colors = ['#f1c40f', '#2ecc71', '#e74c3c', '#9b59b6'];
//     this.run = function (target = 'background') {
//         setInterval(() => {
//             let i = Math.floor(Math.random() * this.colors.length)
//             this.elem.style[target] = this.colors[i];
//         }, 1000)
//     }
// }
// new Color(document.body).run();
// let h1 = new Color(document.querySelector('h1'))
// h1.run();
// h1.run('color')



{/* <div id="box">
<ul id="ul1">
    <li>1111111111111111111111</li>
    <li>2222222222222222222222</li>
    <li>3333333333333333333333</li>
    <li>4444444444444444444444</li>
    <li>5555555555555555555555</li>
    <li>6666666666666666666666</li>
    <li>7777777777777777777777</li>
    <li>8888888888888888888888</li>
    <li>9999999999999999999999</li>
</ul>
<ul id="ul2"></ul>
</div> */}

// window.onload = roll(50);

// function roll(t) {
//     var ul1 = document.getElementById("ul1");
//     var ul2 = document.getElementById("ul2");
//     var box = document.getElementById("box");
//     ul2.innerHTML = ul1.innerHTML;
//     box.scrollTop = 0;
//     var timer = setInterval(rollStart, t);
//     box.onmouseover = function () {
//         clearInterval(timer)
//     }
//     box.onmouseout = function () {
//         timer = setInterval(rollStart, t);
//     }
// }

// function rollStart() {
//     if (box.scrollTop >= ul1.scrollHeight) {
//         box.scrollTop = 0;
//     } else {
//         box.scrollTop++;
//     }
// }

