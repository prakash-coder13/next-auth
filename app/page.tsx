import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="flex justify-between bg-gray-900 p-4 gap-4">
      
      <div >
        <div className="text-white text-2xl">
          bit<span className="text-sm">&#9632;</span>a<span className="text-sm">&#9632;</span>little
        </div>
      </div>
      <div className="flex  gap-4">
        <Link className="text-blue-500" href="/change-history">Change Log</Link>
       <Link className="text-blue-500 " href="/register">Register</Link>
      </div>
    </div>
    <div>Hello there</div>
    </>
   
  );
}
