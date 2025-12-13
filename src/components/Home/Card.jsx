

export default function Card(project) {
  
  

  if (!project) {
    return <div className="project-card">No project data provided.</div>;
  }

  const {
    title = "Untitled Project",
    tag = [],
    text = "No description available.",
    image = "",
    button = { link: "#", text: "View Project" }
  } = project;
  
  return (

    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <img
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          src={image}
          alt="Project Thumbnail"
        />
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{text}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          </div>

          <button href={button} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {button.text}
          </button>
        </div>
      </div>
    </>
  );
}
