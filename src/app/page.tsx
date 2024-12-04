import Image from "next/image";
import BG_SIDEBAR from "../../assets/images/bg-sidebar-desktop.svg";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-magnolia flex justify-center items-center">
      <div className="w-2/3 py-4 px-4 flex bg-white rounded-2xl gap-8">
      <Image src={BG_SIDEBAR} alt="sidebar" />
      <div className="flex flex-col">
        <h1 className="text-marine_blue text-3xl">Personal Info</h1>
        <p className="text-gray-400">Please provide your name, email address, and phone number.</p>
        <form action="">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-marine_blue">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="e.g. Stephen King"
              className="outline-black border-2 border-gray-300 rounded-lg py-2 pl-2"
               />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-marine_blue">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="e.g. stephenking@lorem.com"
              className="outline-black border-2 border-gray-300 rounded-lg py-2 pl-2"
               />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-marine_blue">Phone Number</label>
            <input 
              type="phone"
              id="phone" 
              placeholder="e.g. +1 234 567 890"
              className="outline-black border-2 border-gray-300 rounded-lg py-2 pl-2"
               />
          </div>
          <button className="text-white flex justify-center items-center px-6 py-3 bg-marine_blue rounded-lg">Next Step</button>
        </form>
      </div>
      </div>
    </div>
  );
}
