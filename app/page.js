import Image from 'next/image'

export default function Home() {

  const onClickGaTag = () => {
    gtag('event', 'aaa', {
      'event_category': 'bbb',
      'event_label': 'ccc'
    });
    console.log("clicked")
  }
  return (
    <main className="bg-blue-100 w-screen h-screen flex justify-center items-center">
      <button onClickGaTag={onClickGaTag} className="px-4 py-2 bg-black text-white w-fit h-fit">Click Me</button>
    </main>
  )
}
