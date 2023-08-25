
//id: "lat_long"
let cityHash = {
    2331: "oi", //Cuiabá
    2332: "oi", //Rio de Janeiro
    2333: "oi", //São Paulo
    2334: "oi", //Manaus
    2335: "oi", //São Luís
    2336: "oi", //Aracaju
    2337: "oi", //Salvador
    2338: "oi", //Maceió
    2339: "oi", //Rio Branco
    2340: "oi", //Recife
    2341: "oi", //Natal
    2342: "oi", //Curitiba
    2343: "oi", //Boa Vista
    2344: "oi", //Campo Grande
    2345: "oi", //Belo Horizonte
    2346: "oi", //Porto Alegre
    2347: "oi", //Palmas
    2348: "oi", //Vitória
    2349: "oi", //João Pessoa
    2350: "oi", //Florianópolis  
    2351: "oi", //Porto Velho
    2352: "oi", //Macapá  
    2353: "oi", //Goiânia
    2354: "oi", //Belém
    2355: "oi", //Teresina
    2356: "oi", //Fortaleza
};

let ids = Object.keys(cityHash);

ids.map((e) => {
    let element = document.querySelector(`#path${e}`);
    element.onclick = function() {
        alert(cityHash[e]);
    };
    element.classList.add("cap");
    element.addEventListener('mouseover', (event) => {
        document.querySelector(`#text${e}`).classList.toggle("shadow");
    });
    element.addEventListener('mouseout', (event) => {
        document.querySelector(`#text${e}`).classList.toggle("shadow");
    });
});
