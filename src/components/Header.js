import Image from "next/image"
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid"
export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10 ">
      {/* left */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
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
          placeholder="Start your search"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
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
    </header>
  )
}
