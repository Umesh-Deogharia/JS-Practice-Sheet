// Predict the output: a script that logs '1', schedules setTimeout(() => log('2'), 0), then Promise.resolve().then(() => log('3')), then logs '4'.Explain the exact order and why.


function predictTheOutput() {
    console.log(1);
    setTimeout(() => {
        console.log(2);
    }, 0);
    Promise.resolve().then(() => console.log(3));
    console.log(4);
}

/* 
Output:- 
1
4
3
2
*/
predictTheOutput();