const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change',setWeather);

function setWeather(){
     const choice = select.value;

     switch (choice){
        case 'sunny':
        para.textContent = 'It is nice andy sunny otuside today. Wear shorts! Go to the beach,or park and get an ice cream.';
        break;

        case 'rainy':
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, dont stay out for too long.';
        break;

        case 'snowing':
        case 'overcast':
        para.textContent = 'It isnt raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
        break;

        default:
        para.textContent = '';
     }
}