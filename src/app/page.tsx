import Image from "next/image";
import BG_SIDEBAR from "../../assets/images/bg-sidebar-desktop.svg";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-magnolia flex justify-center items-center">
      <div className="w-2/3 py-4 px-4 flex bg-white rounded-2xl">
      <Image src={BG_SIDEBAR} alt="sidebar" />
      <div className="flex flex-col">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      </div>
    </div>
  );
}
