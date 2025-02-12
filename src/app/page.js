import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "./components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Hello World</h1>
      <br />
      <div>{session?.user ? <LogoutButton /> : <LoginButton />}</div>
      <br />
      <div>
        <p className="font-bold text-xl">From client components</p>
        <UserInfo></UserInfo>
        <p className="font-bold text-xl mt-6">From Server components</p>
        {JSON.stringify(session)}
      </div>
    </div>
  );
}
