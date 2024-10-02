import { getApiGitHub } from '../api/Github'
import banner from '../assets/banner.svg'

export function Header() {
  getApiGitHub()
  
  return (
    <header className="">
      <img src={banner} alt="" className="w-full z-0"/>
    </header>
  )
}