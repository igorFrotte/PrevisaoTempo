
//id: "lat_long"
let cityHash = {
    path2331: "oi", //Cuiabá
    path2332: "oi", //Rio de Janeiro
    path2333: "oi", //São Paulo
    path2334: "oi", //Manaus
    path2335: "oi", //São Luís
    path2336: "oi", //Aracaju
    path2337: "oi", //Salvador
    path2338: "oi", //Maceió
    path2339: "oi", //Rio Branco
    path2340: "oi", //Recife
    path2341: "oi", //Natal
    path2342: "oi", //Curitiba
    path2343: "oi", //Boa Vista
    path2344: "oi", //Campo Grande
    path2345: "oi", //Belo Horizonte
    path2346: "oi", //Porto Alegre
    path2347: "oi", //Palmas
    path2351: "oi", //Porto Velho
    path2355: "oi", //Teresina
    path2359: "oi", //Fortaleza
    path2363: "oi", //Belém
    path2371: "oi", //Goiânia
    path2375: "oi", //Macapá
    path2379: "oi", //Florianópolis
    path2389: "oi", //João Pessoa
    path2401: "oi", //Vitória
};

let ids = Object.keys(cityHash);

ids.map((e) => {
    document.querySelector(`#${e}`).onclick = function() {
        alert(cityHash[e]);
    };
    document.querySelector(`#${e}`).classList.add("cap");
});
