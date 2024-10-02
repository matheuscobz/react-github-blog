import banner from '../assets/banner.svg'

export function Header() {
  return (
    <header className="">
      <img src={banner} alt="" className="w-full h-auto"/>
    </header>
  )
}