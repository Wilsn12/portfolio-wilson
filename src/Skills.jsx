const skills = [
    {
        category: "Front-End Development",
        items: ["HTML", "CSS", "JavaScript", "React JS"]
    },

    {
        category: "Backend Development",
        items: ["Java", "Spring Boot", "PHP", "SQL"]
    },
    
    {
        category: "Progamming & Data",
        items: ["Python","C++", "SQL", "Excel"]
    }
];

function Skills() {
    return(
        <section className="skills">
            <div className="skills-title">
                <p>MY SKILLS</p>
                <h2>What I work with?</h2>
            </div>

            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <h3>{skill.category}</h3>

                        <div className="skill-list">
                            {skill.items.map((item, index) => (
                                <span key={index}>{item}</span>
                            )
                        )}
                        </div>
                    </div>
                )
            )}
            </div>
        </section>
    );
}
export default Skills;