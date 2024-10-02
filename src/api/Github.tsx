export function getApiGitHub() {
  fetch ('https://api.github.com/users/matheuscobz/repos')
    .then(async res => {
      if( !res.ok) {
        console.log("Erro")
      }

      const data = await res.json()
      
      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
      }

    }
  )
  
}