import axios from "axios";
import { parsedEnv } from "../../../env";
import Country from "../types/contry";



type Proops={
    params:{
        cca2:string;
        
    }
}
export default async function Page({params}:Proops) {
    const response = await axios.get<Country[]>(
        `${parsedEnv.API_URL}/alpha/${params.cca2}`
    );

    if(response.data.length === 0){
        return <h1>No se pudo encontrar el pais</h1>
    }
    
    return (
      <main>
        <h1> Detalle del pais:</h1>
        {/* <div>
                <p>
                    <b>Nombre:{params.cca2} {params.official}</b>
                </p>
            </div> */}

        <div>
          {response.data.map((country) => (
            <div>
              <p>Pais: {country.name.common},</p>
              <p>Nombre oficial: {country.name.official}</p>
              <p>Capital: {country.capital}</p>
              <p>Poblacion: {country.population}</p>
              <p>Area: {country.area}</p>
              <p>Lenguaje: {Object.values(country.languages).join(",")}</p>
              <p>Bandera: {country.flag}</p>
              <p>Zona horaria: {country.timezones}</p>
            </div>
          ))}
        </div>
      </main>
    );
}