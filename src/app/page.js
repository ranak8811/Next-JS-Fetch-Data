import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "@/lib/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Hello World</h1>
      <br />
      <div>
        <LoginButton></LoginButton>
      </div>
      <br />
      <div>
        <p className="font-bold text-xl">From client components</p>
        <UserInfo></UserInfo>
        {JSON.stringify(session)}
      </div>
    </div>
  );
}
