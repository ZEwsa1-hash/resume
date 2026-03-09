function SkillBadge({ name, level }) {
  return (
    <div className="skill-badge">
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

export default SkillBadge
