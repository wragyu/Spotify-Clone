import { useSession } from "next-auth/react";

const Center = () => {
  const { data: session } = useSession()

  return (
    <div className="flex flex-grow text-white">
      <h1>Welcome to the Center Area!</h1>
      <header>
        <div>
          <img src="" alt="" />
        </div>
      </header>
    </div>
  );
}

export default Center;
