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

function giai_pt_bac_1(a, b)
{
    if (a == 0 && b == 0){
        console.log('Phương trình vô số nghiệm');
    }
    else if (a != 0 && b == 0){
        console.log('Phương trình có nghiệm x = 0');
    }
    else if (a == 0 && b != 0){
        console.log("Phương trình vô nghiệm");
    }
    else {
        console.log('Phương trình có nghiệm x = ' + (-b/a));
    }
}
