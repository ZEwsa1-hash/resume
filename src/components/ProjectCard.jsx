function ProjectCard({ title, tech, period, description }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <div>
          <div className="job-title">{title}</div>
          <div className="job-company">{tech}</div>
        </div>
        <div className="job-period">{period}</div>
      </div>
      <div className="job-desc">{description}</div>
    </div>
  )
}

export default ProjectCard
