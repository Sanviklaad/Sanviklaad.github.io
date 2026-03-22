import { useNavigate } from "react-router-dom"

export default function RepoCard({ repo }) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/project/${repo.name}`)}>
      <h3>{repo.name}</h3>
      <p>{repo.language}</p>
      <p>⭐ {repo.stargazers_count}</p>
    </div>
  )
}
