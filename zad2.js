round = 0;
chosen = [ false, false, false, false, false, false, false, false, false];
player1 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
player2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
gamemode = 2;
var j;
winner = 0;
player1_wins = 0;
player2_wins = 0;
finished = 0;

function change_mode() {
    gamemode = 1;
}

function pick(button_id) {
    which = button_id.replace("b","");

    if(chosen[which-1]!=true) {

        chosen[which-1] = true;
        
        if(round % 2 == 0) { 
            //document.getElementById("header").innerHTML = "Gracz 2";
            document.getElementById(button_id).innerHTML="O";
            player1[which-1]=1;
            //document.getElementById("singleplayer").disabled = true;
        }

        else {
            //document.getElementById("header").innerHTML = "Gracz 1";
            document.getElementById(button_id).innerHTML="X";
            player2[which-1]=1;
            //document.getElementById("singleplayer").disabled = false;
        }

        check(round++ % 2);
    }

    // if(gamemode==1){
    //     if(round % 2 == 1) { 
    //         for(i=0;i<=8;i++) {
    //             if(chosen[i]==false) {
    //                 j=++i;
    //                 break;
    //             }
    //         }

    //     pick("b" + j);
    //     }
    // }         

    if(gamemode==1 && finished==0){
        if(round % 2 == 1) { 
            j = Math.floor(Math.random()*9);

            while(chosen[j]==true)
            {
                j = Math.floor(Math.random()*9);
            }

        pick("b" + (j+1));
        }
    } 
}

function check(player) {
    if (player==0) {
        if(
            (player1[0] + player1[1] + player1[2] == 3) ||
            (player1[3] + player1[4] + player1[5] == 3) ||
            (player1[6] + player1[7] + player1[8] == 3) ||
            (player1[0] + player1[3] + player1[6] == 3) ||
            (player1[1] + player1[4] + player1[7] == 3) ||
            (player1[2] + player1[5] + player1[8] == 3) ||
            (player1[0] + player1[4] + player1[8] == 3) ||
            (player1[2] + player1[4] + player1[6] == 3) )
            {
                winner = 1;
                player1_wins++;
                gameover();
            }
    }

    else {
        if(
            (player2[0] + player2[1] + player2[2] == 3) ||
            (player2[3] + player2[4] + player2[5] == 3) ||
            (player2[6] + player2[7] + player2[8] == 3) ||
            (player2[0] + player2[3] + player2[6] == 3) ||
            (player2[1] + player2[4] + player2[7] == 3) ||
            (player2[2] + player2[5] + player2[8] == 3) ||
            (player2[0] + player2[4] + player2[8] == 3) ||
            (player2[2] + player2[4] + player2[6] == 3) )
            {
                winner = 2;
                player2_wins++;
                gameover();
            }
    }

    if(round==9 && winner==0) gameover();
}

function gameover() {
    finished = 1;
    chosen = [ true, true, true, true, true, true, true, true ,true ];
    whoIsTheWinner();
    //document.getElementById("score").innerHTML = player1_wins + " : " + player2_wins;
}

function whoIsTheWinner()
{
    if (winner == 0) alert("Remis!");
    if (winner == 1) alert("Gracz 1 wygrał!");
    if (winner == 2) alert("Gracz 2 wygrał!");
}

function reset() {
    finished = 0;
    winner = 0;
    round = 0;
    chosen = [ false, false, false, false, false, false, false, false, false];
    player1 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
    player2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //document.getElementById("header").innerHTML = "Gracz 1";
    //document.getElementById("singleplayer").disabled = false;
    document.getElementById("b1").innerHTML="";
    document.getElementById("b2").innerHTML="";
    document.getElementById("b3").innerHTML="";
    document.getElementById("b4").innerHTML="";
    document.getElementById("b5").innerHTML="";
    document.getElementById("b6").innerHTML="";
    document.getElementById("b7").innerHTML="";
    document.getElementById("b8").innerHTML="";
    document.getElementById("b9").innerHTML="";
}