import Image from "next/image"
import Link from "next/link"

export let statesJson = []

async function nations(){
    const response = await fetch('https://restcountries.com/v3.1/all')

    const data = await response.json()

    statesJson = data.slice()

    return data
}

export default async function Countries() {
  
    const data = await nations()

    const africa = data.filter(country => country.continents.includes('Africa'))

    const countries = data.map(country => (
        <section key={country.cca3}
        className="h-[150px]
        flex flex-col item-center justify-center bg-amber-500 rounded-xl p-3">
           
            <Link href={`/Countries/${country.cca3}`} title={`More information about ${country.name.official} `}>
            <Image src={country.flags.svg} width={100} height={100} alt={country.flags.alt} />
            <h2>{country.name.official}</h2>
            </Link>
          
            <Link href={country.maps.googleMaps} target="_blank" title={country.name.common}
            className="hover:border-b-2 border-b-blue-500 w-1/2">
            Google map
            </Link>
        </section>
    ))

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {countries}

    </div>
  )
}
