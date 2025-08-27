// copy number

function getTextContent(element) {
    let number = document.getElementById(element).innerText;
    return number;
}
function increaseCount(element, increment) {
    let count = document.getElementById(element);
    count.innerText = parseInt(count.innerText) + increment;
}
function decreaseCount(element, decrement) {
    let count = document.getElementById(element);
    count.innerText = Math.max(0, parseInt(count.innerText) - decrement);
}
function copyContent(title, number) {
    navigator.clipboard.writeText(number).then(function () {
        let copyCount = getTextContent("copy");
        copyCount = increaseCount("copy", 1);
        alert('Copied ' + title + ": " + number);
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

// coin per call

function callNumber(title, number) {
    let coins = getTextContent("coin");
    if (coins < 20) {
        alert("Not enough coins. You need at least 20 coins to make a call.");
        return;
    }
    decreaseCount("coin", 20);
    addCallHistory(title, number);
    alert('Calling ' + title + ": " + number);

}