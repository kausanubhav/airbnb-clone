import Image from "next/image"
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid"
import { useState } from "react"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { DateRangePicker } from "react-date-range"
import { useRouter } from "next/router"

export default function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const router = useRouter()
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  }

  const dateSelectHandler = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const searchHandler = () => {
    router.push({
      pathname: "/search",
      query:{
        location:searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        numberOfGuests
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10 ">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative my-auto flex h-10 cursor-pointer items-center"
      >
        <Image
          src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo-768x432.png"
          fill={true}
          style={{ objectFit: "contain", objectPosition: "left" }}
          alt="airbnb logo"
        />
      </div>

      {/* middle */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm ">
        <input
          className=" flex-grow bg-transparent pl-5 text-sm text-gray-600 outline-none placeholder:text-gray-400"
          type="text"
          placeholder={placeholder||'Start your search'}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex"  />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={dateSelectHandler}
          />
          <div className="mb-4 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              type="number"
              onChange={(e) => setNumberOfGuests(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={() => setSearchInput("")}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={searchHandler}>Search</button>
          </div>
        </div>
      )}
    </header>
  )
}
