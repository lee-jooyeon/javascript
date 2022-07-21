function iterate(max, action){
    for(let i = 0; i < max; i++){
        action(i);
        //i가 증가할 때 마다 action 함수를 호출시켜 줄게
    }
}

function print(num){
    console.log(num); //
}

function double(num){
    console.log(num * 2);
}

iterate(3, double);

