bigSpenders = [];

const filterFunction = function(order) {
    if (order >= 9000) {
        bigSpenders.push(order)
    } else {
        order === false;
    }
}

const arrayFinder = businesses.filter(business => {
    const allOrders = business.orders;
    allOrders.forEach(order => filterFunction(order))
});

console.log(bigSpenders)
