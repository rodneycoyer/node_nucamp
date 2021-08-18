const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

function solveRect (l, w) {
    console.log(`solving solveRect function with values of : ${l}, ${w}`);

    if ( l <= 0 || w <= 0 ) {
        console.log(`rectangle dimensions mush be greater than zero. Values received : ${l}, ${w}`);
    } else {
        console.log(`area of rectangle is : ${rect.area(l, w)}`);
        console.log(`perimeter of rectangle is : ${rect.perimeter(l, w)}`);
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-4, 9);