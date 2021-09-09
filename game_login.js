function add_user(){
    player_1=document.getElementById("user_name1").value;
    player_1=document.getElementById("user_name2").value;

    localStorage.setItem("user_name1",user_name1);
    localStorage.setItem("user_name2",user_name2);

    window.location="game_page.html";
}