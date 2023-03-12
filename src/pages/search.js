import Footer from "@/components/Footer"
import Header from "@/components/Header"
import InfoCard from "@/components/InfoCard"
import { useRouter } from "next/router"

export default function SearchPage({ searchResults }) {
  const router = useRouter()
  const { location, startDate, endDate, numberOfGuests } = router.query
  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
  })
  const formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
  })
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for <span>{numberOfGuests}</span> number of guests
          </p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in <span>{location}</span>
          </h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>


          <div className="flex flex-col">
            {searchResults.map((stay) => (
              <InfoCard key={stay.img} stayInfo={stay} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then((res) => res.json())

  return {
    props: {
      searchResults,
    },
  }
}
