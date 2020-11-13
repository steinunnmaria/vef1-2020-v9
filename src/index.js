import { el, element, formatDate } from './lib/utils';
import { fetchEarthquakes } from "./lib/earthquakes";

document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchEarthquakes();

  const list = document.querySelector(".earthquakes");
  const p = document.createElement('p');
  p.textContent = data.joke;
  box.appendChild(p); // Hér er allt „vírað“ saman
});

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const earthquake = await fetchEarthquakes();

    const earthquake_list = document.querySelector(".earthquakes");

    
        const data_title = document.createElement('h2');
        const text_time = document.createElement('dt');
        const data_time = document.createElement('dd');
        const text_mag = document.createElement('dt');
        const data_mag = document.createElement('dd');
        const text_url = document.createElement('dt')
        const data_url = document.createElement('dd');
        const data_details = document.createElement('li');
        const button = document.createElement('div.buttons');
        button = document.createElement('button');
        button = document.createElement('a');

        data_title.textContent = earthquake.title;
        text_time.textContent = "Tími";
        data_time.textContent = formatDate(earthquake.time);
        text_mag.textContent = "Styrkur";
        data_mag.textContent = earthquake.mag + " á richter";
        text_url.textContent = "Nánar";
        data_url.textContent = earthquake.url;
        button.textContent = "Sjá á korti";
        

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(img);

        li.appendChild(div);

        movielist.appendChild(li);

      
  
})