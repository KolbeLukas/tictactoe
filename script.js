let fields = [];

let currentPlayer = 'cross';

function fillShape(position) {
    if (currentPlayer == 'cross') {
        currentPlayer = 'circle';
    } else {
        currentPlayer = 'cross';
    }

    fields[position] = currentPlayer;
    draw();
}


function draw() {
    for (let i = 0; i < fields.length; i++){
        if(fields[i] =='circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if(fields[i] =='cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}