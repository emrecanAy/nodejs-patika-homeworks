function circleArea(r){
    const value = Math.PI * (r*r);
    console.log(`Area = ${value}`);
}

let circleCircumference = (r) => {
    const value = 2 * Math.PI * r;
    console.log(`Circumference = ${value}`);
}

module.exports = {
    circleArea,
    circleCircumference
}