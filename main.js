function send() {
    player1 = document.getElementById("nu1").value;
    player2 = document.getElementById("nu2").value;
    ans = nu1*nu2;
}
question ="nu1";
answer ="nu2";
function check(){
    input= document.getElementById("dig").value;
    if (input=ans)
    {
        if (answer= player1){
        document.getElementById("a").innerHTML= player1 +1}
        else{
        document.getElementById("q").innerHTML= player2+1}
    
    if (question= player2){
        document.getElementById("q").innerHTML= player2+1}
        else{
        document.getElementById("a").innerHTML= player1+1}

    if (answer= player2){
        document.getElementById("q").innerHTML= player2+1}
        else{
        document.getElementById("a").innerHTML= player1+1}
    if (question= player1){
        document.getElementById("q").innerHTML= player2+1}
        else{
        document.getElementById("a").innerHTML= player1+1}
    }
}
