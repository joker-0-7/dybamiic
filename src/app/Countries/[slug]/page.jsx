import Image from "next/image"
import { statesJson } from "../page"

// function fetchStates(params){
 
//     const states = statesJson.find((state)=>state.cca3 === params.slug)

//     return states
// }
export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.slug
 
  const product = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
 
  const previousImages = (await parent).openGraph?.images || []
 console.log(product);
  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

export default async function page({params}) {

    // const states = fetchStates(params)
  return (
    <div>
      {/* <h1>About {states.name.official} flag</h1>
      <Image src={states.flags.svg} width={300} height={300} alt={states.flags.alt}/>

      <p>{states.flags.alt}</p>

      <p>Region: {states.region}</p>
      <p>Capital: {states.capital}</p> */}
      <h1>{params.slug}</h1>
    </div>
  )
}
