import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import { paginationLogic } from "../utils/pagination"

const ResidentList = ({residents}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const {pages, residentsInPage} = paginationLogic(currentPage, residents)

  useEffect(() => {
    setCurrentPage(1)
  }, [residents])

  return (
    <section className="bg-[url('/backgroundCard.jpg')] bg-contain">
      <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[1000px] mx-auto py-10 font-[DSC]">
       {residentsInPage.map((resident) => (
        <ResidentCard key={resident} residentEndpoint={resident} />
        ))}
     </section>

     {/* paginacion */}
     <ul className="text-lg flex gap-3 justify-center flex-wrap">
      {
        pages.map((page) => (
          <li key={page}>
            <button className={` text-white px-5 py-2 mb-4 font-[Roboto] text-2xl ${page === currentPage && "bg-green-950"}` }onClick={() => setCurrentPage(page)}> {page}</button>
          </li>
        ))
      }
     </ul>

    </section>
   
  )
}

export default ResidentList