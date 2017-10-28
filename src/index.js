import css from './css/index.css';
import sass from './css/common.scss';
import $ from 'jquery';
var oDiv1 = document.getElementById('div1');
oDiv1.innerHTML = "Hello World888!!!";

//es6代码：
let a=5;
let add = (x,y) => x+y;


class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

//测试jquery文件是否成功打包并引入：
$('#div4').html('test for jquery');


//json文件引用测试：
let json = require('../author.json');
$('#json').html(`作者: ${json.name} ，年龄: ${json.age}`);