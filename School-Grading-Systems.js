let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

function getScored() {
    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B";
    } else if (scoreC) {
        scoreFinal = "C";
    } else if (scoreD) {
        scoreFinal = "D";
    } else if (scoreF) {
        scoreFinal = "F";
    } else {
        scoreFinal = "Nota Inválida"
    }

    return scoreFinal

}


getScored(101)
getScored(100)
getScored(90)
getScored(-1)
getScored(0)
getScored(74)
