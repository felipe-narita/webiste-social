player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1_score").innerHTML = player1Name;
document.getElementById("player2_score").innerHTML = player2Name;

document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player1Name;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2Name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(word.lenght/2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);

    lenght_minus_1 = word.lenght - 1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> p. "+remove_charAt3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value ="";
}

questionTurn = "player1";
answerTurn = "player2";

function check(){

    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.ToLowerCase();
    console.log("resposta em caixa baixa - " + answer);
    if(answer == word)
    {
        if(answerTurn == "player1")
        {
            player1Score = player1Score +1;
        document.getElementById("player1Score").innerHTML = player2Score;
        }
    
    else
    {
        player2Score = player2Score +1;
        document.getElementById("player2Score").innerHTML = player2Score;
    }
    
}
if(questionTurn == "player1")
{
    questionTurn = "player2"
    document.getElementById("playerQuestion").innerHTML = "Turno de pergunta: " + player2name ;
}
else
{
    questionTurn = "player1"
    document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player1Name ;
}
if (answerTurn == "player1")
{
    answerTurn = "player2"
    document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player1Name ;
}
document.getElementById("output").innerHTML = "";
}
