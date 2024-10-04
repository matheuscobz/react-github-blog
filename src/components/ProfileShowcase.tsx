import { BuildingOffice, GithubLogo, Users } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function ProfileShowcase() {
  const [userData, setUserData] = useState({
    name: '',
    followers: 0,
    login:'',
    avatarUrl: '',
  })

  useEffect(() => {
    fetch ("https://api.github.com/users/matheuscobz")
      .then(async res => {
        
        const data = await res.json()
        console.log(data)
        setUserData({
          name: data.name,
          followers: data.followers,
          login: data.login,
          avatarUrl: data.avatar_url
        })
        
      }
    )
    .catch(error => {
      console.log(error.message);
     
    })
  }, [])

  return (
    <section className="bg-basebackground flex justify-center">
      <div className="flex items-center gap-12 mt-12 shadow-2xl max-w-7xl h-15 pr-12 pl-12 py-12 rounded-md flex-shrink-0 bg-gray-900">
        <img src={userData.avatarUrl} className="w-80 h-80 rounded-md" alt="" />
        <div className="flex flex-col font-nunito h-full justify-between">
          <h1 className="text-basetitle text-2xl font-bold">{userData.name}</h1>
          <span className="text-basetext text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur tempore totam ea non cupiditate, laborum quos, quibusdam, ratione maxime perspiciatis eos veniam fugiat! Similique impedit dicta ea ratione laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam rerum amet atque vel necessitatibus doloribus vitae sit exercitationem ipsam, rem fugiat, delectus optio quae incidunt tenetur iusto provident minus!</span>
          
          {/* Aplicando justify-between para distribuir os ícones */}
          <div className="flex mt-4 text-basespan text-xl gap-8">
            <div className="flex items-center gap-2">
              <GithubLogo size={24}/>
              <span>{userData.login}</span>
            </div>

            <div className="flex items-center gap-2">
              <BuildingOffice size={24}/>
              <span>UNESPAR</span>
            </div>

            <div className="flex items-center gap-2">
              <Users size={24}/>
              <span>{userData.followers} seguidores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
