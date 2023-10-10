import { IconSearch } from "@tabler/icons-react"
import axios from "axios"

const Location = ({location, setLocation}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const idLocation = e.target.idLocation.value

    axios
    .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
  }

  return (
    <section className="bg-[url('/backgroundHeader.jpg')] bg-cover font-[DSC]">
      <div className="overflow-hidden ">
        <img src="/titlelogo.png" alt="" />
      </div>

      {/* <div className="absolute  bottom-4 left-1/2 
      -translate-x-1/2 flex flex-col gap-10"> */}
     
      <form onSubmit={handleSubmit} className="flex justify-center m-[0_auto] border-green-400 border-2 S mb-10 sm:w-[400px]">
        <input placeholder="type a new location..." name="idLocation" className="text-black text-center outline-none px-10" type="number" />
        <button type="submit" className="flex justify-center items-center text-base font-semibold bg-green-600 w-40 py-1 active:scale-[.98] active:duration-75 hover:scale-[1.06] ease-out transition-all">
          Search <IconSearch  size={18}/>
          </button>
      </form>

      {/* Location inf */}
      <section className="m-[0_auto] border-green-400 border-2 p-3 md:w-[700px]">
        <h3 className="text-center mb-2 text-green-500">¡Wellcome to {location?.name}!</h3>

        <ul className="flex justify-center gap-7">
            <li>Type: {location?.type}</li>
            <li>Dimension: {location?.dimension}</li>
            <li>Population: {location?. residents.length} </li>
        </ul>
      </section>

    </section>
  )
}

export default Location