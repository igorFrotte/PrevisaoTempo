
//id: "lat_long"
let cityHash = {
    2331: "lat=-15.5989&lon=-56.0949", //Cuiabá
    2332: "lat=-22.908333&lon=-43.196388", //Rio de Janeiro
    2333: "lat=-23.5489&lon=-46.6388", //São Paulo
    2334: "lat=-3.10719&lon=-60.0261", //Manaus
    2335: "lat=-2.53073&lon=-44.3068", //São Luís
    2336: "lat=-10.9095&lon=-37.0748", //Aracaju
    2337: "lat=-12.9704&lon=-38.5124", //Salvador
    2338: "lat=-9.66625&lon=-35.7351", //Maceió
    2339: "lat=-9.974&lon=-67.8076", //Rio Branco
    2340: "lat=-8.05428&lon=-34.8813", //Recife
    2341: "lat=-5.7958&lon=-35.2094", //Natal
    2342: "lat=-25.4284&lon=-49.2733", //Curitiba
    2343: "lat=-7.6833&lon=-48.2667", //Boa Vista
    2344: "lat=-20.4435&lon=-54.6478", //Campo Grande
    2345: "lat=-19.912998&lon=-43.940933", //Belo Horizonte
    2346: "lat=-30.033056&lon=-51.230000", //Porto Alegre
    2347: "lat=-10.2128&lon=-48.3603", //Palmas
    2348: "lat=-20.3222&lon=-40.3381", //Vitória
    2349: "lat=-7.11532&lon=-34.861", //João Pessoa
    2350: "lat=-27.5969&lon=-48.5495", //Florianópolis  
    2351: "lat=-8.76183&lon=-63.902", //Porto Velho
    2352: "lat=-0.0344566&lon=-51.0666", //Macapá  
    2353: "lat=-16.6799&lon=-49.255", //Goiânia
    2354: "lat=-1.45502&lon=-48.5024", //Belém
    2355: "lat=-5.08921&lon=-42.8016", //Teresina
    2356: "lat=-3.71839&lon=-38.5434", //Fortaleza
};

let ids = Object.keys(cityHash);

ids.map((e) => {
    let element = document.querySelector(`#path${e}`);
    element.onclick = function() {
        document.querySelector(`.side`).style.display = "flex";
        const promessa = axios.get(`https://api.openweathermap.org/data/2.5/weather?${cityHash[e]}&appid=f0da8c23aa7b31379cc255a6d8993abd&units=metric&lang=pt_br`)
            .then((response) => {
                document.querySelector(".side").innerHTML = 
                `
                    <div>${response.data.name}</div>
                    <div>
                        <img src='http://openweathermap.org/img/w/${response.data.weather[0].icon}.png' />   
                        <div class="temp">
                            <div>${response.data.main.temp}°C</div>
                            <br />
                            <div>${response.data.weather[0].description}</div>
                        </div>
                    </div>    
                    <div>Sensação Térmica: ${response.data.main.feels_like}°C</div>
                    <div>
                        <div>Nuvens: ${response.data.clouds.all}%</div>
                        <div>Humidade: ${response.data.main.humidity}%</div>
                    </div>
                    <div>
                        <div>Mínimo: ${response.data.main.temp_min}°C</div>
                        <div>Máximo: ${response.data.main.temp_max}°C</div>
                    </div>
                    <div>Pressão: ${response.data.main.pressure}hPa</div>
                    <div>Vel do Vento: ${response.data.wind.speed}m/s</div>
                    <div class='close'>x</div>
                `;
                document.querySelector(".close").onclick = function (){
                    document.querySelector(`.side`).style.display = "none";
                };
            })
            .catch((erro) => {
                console.log("erro");
            });
    }
    element.classList.add("cap");
    element.addEventListener('mouseover', (event) => {
        document.querySelector(`#text${e}`).classList.toggle("shadow");
    });
    element.addEventListener('mouseout', (event) => {
        document.querySelector(`#text${e}`).classList.toggle("shadow");
    });
});
