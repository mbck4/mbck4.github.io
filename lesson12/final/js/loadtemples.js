window.addEventListener('load', () => {
    // const servername = "http://127.0.0.1:5500/ice/temples/"
    const requestURL = "js/temples2.json"
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key, temple]) => {
                buildTempleCard(temple);

            });
        });
});

function buildTempleCard(temple) {
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                   
                    <img src="${temple.imageurl}" alt="${temple.name}">
                   
                    <p>Address: <b>${temple.address1} ${temple.city} ${temple.state} ${temple.zip} </b></p>
                    <p>Phone Number: <b>${temple.phone} </b></p>
                    <p>Current President: <b>${temple.presidents[temple.presidents.length-1]}</b></p>
                   `;

    document.querySelector("#temples").appendChild(card);
}