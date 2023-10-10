import axios from "axios"
import { useEffect, useState } from "react"
import { characterStatus } from "../constants/resident"

const ResidentCard = ({residentEndpoint}) => {
  const [resident, setResident] = useState(null)

  useEffect(() => {
    axios.get(residentEndpoint)
    .then(({data}) => setResident(data))
    .catch((err) => console.log(err))
  }, [])

  return (
   <article className=" border-green-500 border-2">
    <header className="relative mb-2">
      <img src={resident?.image} alt="" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-7 border-2 border-green-500 rounded-md flex items-center gap-2">
        <div className={`h-3 w-3 
        ${characterStatus[resident?.status]} rounded-full`}></div>
        <span>{resident?.status}</span>
      </div>
    </header>
    <div className="m-2 font-[Fira _Code] font-normal">
      <h4 className="font-bold text-xl" >{resident?.name}</h4>
      <hr className="mb-2"/>
      <ul>
        <li className=" flex gap-14 text-base"><span className="text-gray-500 text-xs">Species</span> {resident?.species}</li>
        <li className=" flex gap-16 text-base"><span className="text-gray-500 text-xs">Origin</span> {resident?.origin.name}</li>
        <li className=" flex gap-6 text-base"><span className="text-gray-500 text-xs">Times appear</span> {resident?.episode.length} time</li>
      </ul>
    </div>
   </article>
  )
}

export default ResidentCard