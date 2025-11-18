"use client";
import { useEffect, useState } from "react";
import ApplePage from "@/components/subpages/ApplePage";
import Win11Page from "@/components/subpages/Win11Page";

type PortfolioItem = {
  id: string;
  title: string;
  description?: string;
};

interface Weather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}


export default function Portfolio() {
  const [windowPos, setWindowPos] = useState(0);
  const [windowToggle, setWindowToggle] = useState(1);
  const [projectData, setProjectData] = useState<PortfolioItem[]>([]);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [city, setCity] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipinfo.io/json?token=38a7b84e2e460e");
        const data = await res.json();
        const [lat, lon] = data.loc.split(",");
        setCity(data.city);
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setWeather(data.current_weather);

            const weatherCode = data.current_weather.weathercode;

            let condition = "";
            if (weatherCode === 0) {
              condition = "Clear sky";
            } else if ([1, 2, 3].includes(weatherCode)) {
              condition = "Cloudy";
            } else if ([45, 48].includes(weatherCode)) {
              condition = "Fog";
            } else if ([51, 53, 55].includes(weatherCode)) {
              condition = "Drizzle";
            } else if ([61, 63, 65].includes(weatherCode)) {
              condition = "Rain";
            } else if ([71, 73, 75].includes(weatherCode)) {
              condition = "Snow";
            } else if ([95, 96, 99].includes(weatherCode)) {
              condition = "Thunderstorm";
            }
            setWeatherCondition(condition);
          })
          .catch((err) => {
            console.error("Error fetching weather:", err);
          });

      } catch (err) {
        console.error("Error fetching location:", err);
      }
    };

    fetchLocation();
  }, [])

  return (
    <div
      className="flex fixed top-0 w-[200vw] h-screen"
      style={{ left: -windowPos + "px" }}
    >
      <Win11Page
        windowToggle={windowToggle}
        setWindowPos={setWindowPos}
        setWindowToggle={setWindowToggle}
        weather={weather}
        weatherCondition={weatherCondition}
        city={city}
      />
      <ApplePage
        windowToggle={windowToggle}
        setWindowPos={setWindowPos}
        setWindowToggle={setWindowToggle}
        weather={weather}
        weatherCondition={weatherCondition}
        city={city}
      />
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black animate-wiggle">
        <img
          src="/Win11.png"
          alt="Win11"
          width={50}
          height={50}
          className="animate-win11"
        />
      </div>
    </div>
  );
}
