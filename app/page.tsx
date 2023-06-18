import Image from 'next/image'
import HoverBoxes from './components/hoverbox'

export default function Home() {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-between p-10 min-h-screen">
      <div className="md:w-1/2 py-20 px-10 flex flex-col justify-between lg:min-h-[800px]">
        <div className='align-top'>
          <h1 className="text-4xl font-bold ">Welcome to Techn-AI</h1>
          <p className="text-xl mt-4 ">We bring cutting-edge technology and AI solutions to your business.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold ">Our Services</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <span className="text-green-500 mr-2">&bull;</span> Complex System Intergration
            </li>
            <li className="mb-2">
              <span className="text-green-500 mr-2">&bull;</span> Machine Learning
            </li>
            <li className="mb-2">
              <span className="text-green-500 mr-2">&bull;</span> Data Analytics
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image src="/network_abstract.png" alt="Hero" width={500} height={500} className="w-full h-auto" />
      </div>

    </main>
          <div className="m-8">
          <HoverBoxes />
          </div>
          <div>

          </div>
          </>
  )
}
