import axios from "axios"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"



type Repository = {
  full_name: string
  description: string
}

export function Repos(){
    const { data: repositories, isFetching } = useQuery<Repository[]>('repos', async ()=> {
      const response = await axios.get('http://api.github.com/users/diego3g/repos')
    
      return response.data
    })




  return(
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
        return(
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>
            {repo.full_name}
            </Link>
            <p>{repo.description}</p>
          </li>
        )
      })}

    </ul>
  )
}

