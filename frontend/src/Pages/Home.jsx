import { useEffect, useState } from "react"
import axios from "axios"
import RepoCard from "../components/RepoCard"

export default function Home() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/repos")
      .then(res => setRepos(res.data))
  }, [])

  return (
    <div>
      <h1>Developer Dashboard</h1>

      {repos.slice(0,6).map(repo => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}
