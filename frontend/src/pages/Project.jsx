import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Project() {
  const { name } = useParams()
  const [repo, setRepo] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:5000/api/repo/${name}`)
      .then(res => setRepo(res.data))
  }, [name])

  if (!repo) return <p>Loading...</p>

  return (
    <div>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      <p>⭐ {repo.stargazers_count}</p>
    </div>
  )
}
