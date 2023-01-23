import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, HeartIcon, RssIcon,  } from "@heroicons/react/outline"
import { signOut, useSession } from "next-auth/react"


const Sidebar = () => {
  const { data: session, status } = useSession();
  const {}

  console.log(session)

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>

          <p>Log Out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5"/>
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5"/>
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"/>

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5"/>
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5"/>
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5"/>
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"/>

        {/* Playlists... */}
        <p className="cursor-pointer hover:text-white">
          Playlist Name
        </p>
      </div>
    </div>
  )
}

export default Sidebar
