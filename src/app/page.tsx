import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const socials = [
    {
      id: 1,
      social: "GitHub",
      href: "https://github.com/okutewonah",
    },
    {
      id: 2,
      social: "Frontend Mentor",
      href: "https://www.frontendmentor.io/profile/okutewonah",
    },
    {
      id: 3,
      social: "LinkedIn",
      href: "https://www.linkedin.com/in/okuwon/",
    },
    {
      id: 4,
      social: "Twitter",
      href: "https://twitter.com/Kunta_Okute",
    },
    {
      id: 5,
      social: "Instagram",
      href: "https://www.instagram.com/kunta_okute/",
    },
  ];
  return (
    <main className="flex bg-off-black min-h-screen items-center justify-center">
      <div className="flex flex-col items-center py-[2rem] w-[350px] h-auto bg-dark-grey rounded-md font-bold">
        <Image
          className="rounded-full mb-5"
          src="/assets/images/avatar-jessica.jpeg"
          width={100}
          height={100}
          alt="avatar-jessica"
        />
        <h1 className="text-white text-[1.2rem] mt-5">Jessica Randall</h1>
        <p className="text-green text-xs my-2">London, United Kingdom</p>
        <q className="text-white my-5 text-xs">
          Front-end developer and avid reader.
        </q>
        {socials.map((social) => (
          <div key={social.id} className="w-[300px]">
            <a
              href={social.href}
              target="_blank"
              className="flex items-center text-xs justify-center w-full h-[40px] my-2 p-2 text-white bg-grey rounded cursor-pointer hover:bg-green hover:text-off-black"
            >
              {social.social}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
