import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-10 items-end justify-center">
          <p className="font-bold text-3xl self-center">
            The best URL shortener in the market
          </p>
          <p className="text-xl self-center text-center px-3">
            We are the most straightforward URL shortener and the best of its kind, we provide the best service for you to shorten your URL.
          </p>
          <div className='flex space-x-4 justify-center items-center gap-5 self-center text-white'>
                <Link href={"/shorten"}><button className='rounded-lg bg-purple-500 shadow-lg font-bold p-2'>Try now</button></Link>
                <Link href={"/github"}><button className='rounded-lg bg-purple-500 shadow-lg font-bold p-2'>Github</button></Link>
            </div>
        </div>
        <div className="flex justify-start relative">
          <Image src={"/vector.png"} fill={true} alt="vector image" />
        </div>

      </section>
    </main>
  );
}
