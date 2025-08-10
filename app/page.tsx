import Link from "next/link";

export default function Home() {
  const availablePages: { href: string; text: string }[] = [
    { href: "/calculator", text: "Calculator" },
    { href: "/register", text: "Sign Up/Register" },
    { href: "/components", text: "Various Components"},
    { href:"/change-history",text: "Change Log"}
  ];
  return (
    <>
      <div className="flex flex-col  w-screen  text-center gap:8 mt-10 justify-center align-center">
        <div className="text-2xl mb-10"> Available Pages</div>
        {availablePages.map((page) => {
          return (
            <Link key={page.href} href={page.href}>
              {page.text}
            </Link>
          );
        })}
      </div>
    </>
  );
}
