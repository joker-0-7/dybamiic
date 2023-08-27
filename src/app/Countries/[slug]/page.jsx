import Image from "next/image"
import { statesJson } from "../page"

function fetchStates(params){
 
    const states = statesJson.find((state)=>state.cca3 === params.slug)

    return states
}

export default async function page({params}) {

    const states = fetchStates(params)
  return (
    <div>
      <h1>About {states.name.official} flag</h1>
      <Image src={states.flags.svg} width={300} height={300} alt={states.flags.alt}/>

      <p>{states.flags.alt}</p>

      <p>Region: {states.region}</p>
      <p>Capital: {states.capital}</p>
    </div>
  )
}
