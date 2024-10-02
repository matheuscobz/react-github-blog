import { BuildingOffice, GithubLogo, Users } from "@phosphor-icons/react";

export function ProfileShowcase() {
  return ( 
    <section className="z-20 bg-basebackground">
      <div className="flex justify-center items-center bg-basebackground  -mt-40">
        <img src="https://github.com/matheuscobz.png" className="w-80 h-80 py-8 pr-8 pl-10" alt="" />
        <div>
          <h1 className="text-basetitle">Cameron Williamson</h1>
          <p className="text-basetext">Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          <div className="flex justify-start gap-10">
            <div className="flex gap-4">
              <GithubLogo  size={24} color="#AFC2D4"/>
              <span className="text-basetext">cameronwll</span>
            </div>
            
            <div className="flex gap-4">
              <BuildingOffice size={24} color="#AFC2D4"/>
              <span className="text-basetext">Rocketseat</span>
            </div>

            <div className="flex gap-4">
              <Users size={24} color="#AFC2D4"/>
              <span className="text-basetext">32 seguidores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}