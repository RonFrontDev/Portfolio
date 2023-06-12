import "./Project.scss";

function Project({ data }) {
  return (
    <div className="project">
      <a className="project__imagebox" href={data.link} target="_blank">
        <img
          className="project__image"
          src={data.image.src}
          alt={data.image.alt}
        />
      </a>
      <div className="project__info">
        <h1 className="project__title">{data.title}</h1>
        <p className="project__paragraph">{data.description}</p>
        <div className="project__skills">
          {data.skills.map((skill) => (
            <p key={skill.id} className="project__skill">
              {skill.name}
              <img className="project__skill-icon" src={skill.icon} alt="" />
            </p>
          ))}
        </div>
        <div className="project__buttons">
          {data.links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              className="project__button"
            >
              {link.name}
              <img className="project__skill-icon" src={link.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
