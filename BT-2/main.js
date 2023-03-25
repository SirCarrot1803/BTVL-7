SolveBtn.onclick = function(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    if (a == "" || b == ""){
        console.log("Vui lòng nhập dữ liệu");
    }
    else {
        a = Number(a);
        b = Number(b);
        giai_pt_bac_1(a, b);
    }
};
function giai_pt_bac_1(a, b){
    if (a == 0 || b == 0){
        console.log("Vui lòng nhập lại dữ liệu")
    }
    else{
        Math.cos(x)= (a*a+b*b-c*c)/(2*a*b);
        let c = Math.sqrt(a*a+b*b);
        console.log("Cạnh huyền có giá trị:", Math.sqrt(c));
        console.log("Đường cao có giá trị: ",a,"hoặc ",b);
        console.log("Số đo góc 1 là: ",x, "và số đo góc 2 là: ",90-x )
    }
}
