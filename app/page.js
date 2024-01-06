import Image from 'next/image'

export default function Home() {

  const onClickGaTag = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag("event", "click", { value: "" });
      console.log("click")
    }
  }
  return (
    <main className="bg-blue-100 w-screen h-screen flex justify-center items-center">
      <button onClickGaTag={onClickGaTag} className="px-4 py-2 bg-black text-white w-fit h-fit">Click Me</button>
    </main>
  )
}
