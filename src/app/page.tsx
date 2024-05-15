import Image from "next/image";
import { parsedEnv } from "../../env";
import axios from "axios";
import Country from "./types/contry";
import Link from "next/link";

export default async function Home() {
  const response = await axios.get<Country[]>(`${parsedEnv.API_URL}/all`)

  return (
    <main>
      <h1>Listado de Paises</h1>
      <div>
        {response.data.map((country, index)=>(
          <article key={index}>
            <Image
              src={country.flags.png}
              alt={country.name.common}
              width={120}
              height={128}
            />
            <h2>{country.name.common}</h2>
            <Link href={`/${country.cca2}`}>ir al pais</Link>
          </article>
        ))}
      </div>
      
      
    </main>
  );
}
