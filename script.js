
const submit = document.querySelector('button')
let result = document.querySelector('#weatherResult')
const city = document.querySelector('#city')
const apiKey = '4757beabadc7820a872162e7e19478a6'
const warning = document.querySelector('#warning')

submit.addEventListener('click', function(e){

    let ville = city.value.trim()
    if(ville ==="" ){
        warning.innerHTML = `
            Veuillez entrer une ville
        `
    }
    
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`)
    .then(response => {
    
      if (!response.ok) {
        throw new Error("Ville introuvable !");
      }
      return response.json();
    })
    .then (data => {
        warning.innerHTML=``

        let card = document.createElement('div');

        card.innerHTML = `
        <div class="bg-blue-300 text-white shadow-lg rounded-xl p-6 w-32 sm:w-36 md:w-40 lg:w-44">
            <h2 class="text-5  sm:text-2xl font-bold md:text-3xl lg:text-5xl mb-2 text-center">${data.name}</h2>
            
            <div class="flex items-center justify-center gap-4 mb-4">
            <h3 class="text-xs sm:text-xl md:text-2xl lg:text-3xl font-medium">${data.weather[0].main}</h3>
            <img class="w-8 sm:w-10 md:w-12 lg:w-15 h-8 sm:h-10 md:h-12 lg:h-15" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">
            </div>
            
            <p class="text-xs sm:text-xl md:text-2xl lg:text-lg">🌡️ <span class="font-semibold">${data.main.temp}°C</span></p>
            <p class="italic text-sm">☁️ ${data.weather[0].description}</p>
        </div>
        `;

        result.append(card);

        console.log(data.weather)
    })
    

})