function sendOrder() {
    let name = document.getElementById("name").value;
    let item = document.getElementById("item").value;
    let size = document.getElementById("size").value;
    let colour = document.getElementById("colour").value;
    let payment = document.getElementById("payment").value;

    let message =
        `Hi Chikwa Clothing,%0A%0AI would like to place an order:%0A` +
        `Name: ${name}%0A` +
        `Item: ${item}%0A` +
        `Size: ${size}%0A` +
        `Colour: ${colour}%0A` +
        `Payment Method: ${payment}`;

    window.open(`https://wa.me/27646431469?text=${message}`);
}
