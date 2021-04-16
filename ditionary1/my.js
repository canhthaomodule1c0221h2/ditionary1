function isDitionary(){

let a = document.getElementById("import").value;
let english = ["dog", "cat", "bird"];
let vietNam = ["chó", "mèo", "chim"];



    for (let i = 0; i<english.length; i++){
        if (english.indexOf(a) !==-1){
            document.getElementById("result").innerHTML=vietNam[english.indexOf(a)];
        }
        else {
            document.getElementById("result").innerHTML = + a+"không có trong từ điển"
        }
    }
}
