export default function About(){
  return (
    <div className="container">
      <div className="profile">
        <h2>Mercede</h2>
        <h3>Software Engineer & Designer</h3>

        <p>
          Based in New York, I am a Care Management Coordinator transition to Software Engineering. I'm currently a student at Fullstack Academy, expected Apr 2024. I enjoy the challenge, always yearning to learn and passionate for innovation. I also love traveling ✈️, listening to music 🎵, watching kdramas/anime 📺, playing video games 🎮, everything matcha 🍵 & bubble tea 🧋
        </p>

        <h3 className="skills">Skills</h3>
        <ul className="skillItems">
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>HTML / CSS</li>
          <li>PostgreSQL</li>
          <li>Prisma</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Wordpress</li>
          <li>Test Driven Environments</li>
        </ul>

        <button className="resume">Resume</button>
      </div>
    </div>
  )
}