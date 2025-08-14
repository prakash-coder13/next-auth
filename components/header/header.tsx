'use client'
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {

  const clickHandler = (e:React.MouseEvent)=>{
    console.log("Clicked ")
  }
  return (
    <>
      <div className="flex justify-between bg-gray-900 p-4 ">
        <div>
          <Link href="/">
            <div className="text-white text-2xl">
              bit<span className="text-sm">&#9632;</span>a
              <span className="text-sm">&#9632;</span>little
            </div>
          </Link>
        </div>
        <div>
          <Button onClick={clickHandler}>Dark Mode</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
