export function getApiGitHubSearch() {
  fetch ("https://api.github.com/repos/matheuscobz/api-test/issues/1")
    .then(async res => {
      if( !res.ok) {
        console.log("Erro")
      }

      const data = await res.json()
      console.log(data)

    }
  )
}

export function getApiGitHubPosts() {
  fetch ("https://api.github.com/repos/matheuscobz/api-test/issues/1")
    .then(async res => {
      if( !res.ok) {
        console.log("Erro")
      }

      const data = await res.json()
      console.log(data)

    }
  )
}