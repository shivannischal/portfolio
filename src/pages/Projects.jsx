export default function Projects(){

    const projects =[
        { 
            id:'1', 
            title:'Task Manager', 
            about:"A Simple CRUD Api created with Spring Boot", 
            tech:['Java', 'Spring Boot', 'PostgreSQL'],
            link:'https://github.com/shivannischal/Task-Manager.git'
        },
        { 
            id:'2', 
            title:'Expense Tracker', 
            about:"A Simple CRUD Api created with Spring Boot", 
            tech:['Java', 'Spring  Boot', 'PostgreSQL'],
            link:'http://localhost:5173/expenseTracker'
        }
    ];

    const ProjectCard =({project}) => (
        <div className="bg-white rounded-lg shadow-md">
            <div className="text-center p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.about}</p>
                <div className="gap-2 flex flex-wrap justify-center mb-4">
                    {project.tech.map(tech => (
                        <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                <a href={project.link} target="_main" className="font-semibold text-blue-600 hover:underline">Github Link</a>
            </div>
        </div>
    )

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}