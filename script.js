let flag = 0;
document.getElementById('mn').addEventListener('click', function(){
    console.log("hello");

var box = document.getElementById('ras');

if (flag == 0) {
    box.style.left = '0%'
    box.style.transition = ".6s"
    flag = 1;
    
}
else if (flag == 1) {
    box.style.left = '-60%'
    box.style.transition = ".6s"
    flag = 0;
}
});