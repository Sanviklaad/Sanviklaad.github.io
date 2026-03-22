import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

export default function ActivityChart({ repos }) {

  const data = repos.slice(0,6).map(r => ({
    name: r.name,
    stars: r.stargazers_count
  }))

  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="stars" />
    </LineChart>
  )
}
