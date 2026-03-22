import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

export default function LanguageChart({ repos }) {

  const langMap = {}

  repos.forEach(r => {
    if (!r.language) return
    langMap[r.language] = (langMap[r.language] || 0) + 1
  })

  const data = Object.keys(langMap).map(k => ({
    language: k,
    count: langMap[k]
  }))

  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="language" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" />
    </BarChart>
  )
}
