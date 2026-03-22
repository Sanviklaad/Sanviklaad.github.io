import { useEffect, useState } from "react"
import { fetchRepos } from "../services/api"
import LanguageChart from "../components/LanguageChart"
import ActivityChart from "../components/ActivityChart"
import Tech3D from "../components/Tech3D"
import Navbar from "../components/Navbar"

export default function Home() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetchRepos().then(res => setRepos(res.data))
  }, [])

  return (
    <div style={{ background:"#0a0a0a", color:"white", minHeight:"100vh" }}>

      <Navbar />

      <div style={{ padding:"40px" }}>

        <h1>Sanvik Laad</h1>
        <p>Backend Engineer | Distributed Systems</p>

        <h2>Engineering Insights</h2>

        <h3>Language Distribution</h3>
        <LanguageChart repos={repos} />

        <h3>Repo Activity</h3>
        <ActivityChart repos={repos} />

        <h3>System Visualization</h3>
        <Tech3D />

      </div>
    </div>
  )
}
