const pwc = (range) => {
    for(let range=0;range<=50;range++){
        
        if (range % 15 === 0) {
            console.log(range, ': PricewaterhouseCoopers');
        }
        else if (range % 3 === 0) {
            console.log(range, ': Pricewater');
        }
        else if ( range % 5 === 0) {
            console.log(range, ': houseCoopers');
        }
        else {
            console.log(range, ': no multiple');
        }
    }
}

pwc(50);