import "./Project.css"
import renu from "../assets/projects/1.png"
import per_fin_man from "../assets/projects/2.png"
import meli from "../assets/projects/meli.png"
import pashto_proverb from "../assets/projects/pro.png"
import pashto_typing from "../assets/projects/typing.png"
import text_speech from "../assets/projects/text.png"

const Project = () => {
    const project_data = [
        {
            id: 1,
            name: "Construction Lab management system",
            description: "This system manage the all work of the Construction Lab , like employee, treaty , finance and office expenditure.",
            image: renu,
            technologies: ["HTML", "CSS", "JavaScript", "Nodejs", "MySql"]
        },
        {
            id: 1,
            name: "Personal Finance management System",
            description: "A multi user system which manage the all personal finance activity of a person.",
            image: per_fin_man,
            technologies: ["HTML", "CSS", "JavaScript", "Nodejs", "MySql"]
        },
        {
            id: 1,
            name: "Meli almas Construction Company website ",
            description: "A website for meli almas construction company, show it is services, projects, jobs news and it is own news.",
            image: meli,
            technologies: ["HTML", "CSS", "JavaScript", "Nodejs", "MySql"]
        },
        {
            id: 1,
            name: "pashto language typing game & keyboard structure",
            description: "Pashto language typing game with three level hard, middle, easy. and showing the pashto keyboard structure.",
            image: pashto_typing,
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 1,
            name: "Pashto famous Proverbs website ",
            description: "Pashto proverbs website having the category, after selecting any category you can see allot of proverbs of that category.",
            image: pashto_proverb,
            technologies: ["React", "CSS", "Nodejs", "MySql"]
        },
        {
            id: 1,
            name: "Text to speech converting website",
            description: "Text to speech converting website with having multiple voices.",
            image: text_speech,
            technologies: ["React", "CSS"]
        },
    ]
    return (
        <section className="projects" id="projects">
            <div className="project-title">
                <h1>My <span>Projects</span></h1>
                <p>A selection of recent work</p>
            </div>
            <div className="project-container">
                {
                    project_data.map((data) => {
                        return (
                            <div className="project-card">
                                <img src={data.image} alt="" />
                                <div className="project-info">
                                    <h2 className="project-name">{data.name}</h2>
                                    <p>{data.description}</p>
                                    <div className="tech-used">
                                        {data.technologies.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </section>
    );
}

export default Project;
