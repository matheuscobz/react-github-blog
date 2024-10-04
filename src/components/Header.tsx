
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex justify-center bg-gradient-to-b from-[#1c2c3b] to-[#0B1B2B]">
      <img src={logo} alt="" className='pb-11 pt-16'/>
    </header>
  )
}