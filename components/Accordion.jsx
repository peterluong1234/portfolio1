import styles from "../styles/Work.module.scss";
import { useEffect, useState } from "react";

export const Accordion = ({ work }) => {
  const [expandedWork, setExpandedWork] = useState({});
	const [loading, setLoading] = useState(false);

  const toggleWorkItem = (index) => {
    setExpandedWork((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

	if (work) {
		setLoading(true);
	} else if (work === null) {
		return null;
	}

	if (loading) {
		return (<>
		
		</>)
	}

  return (
    <>
      {work.map((workplace, idx) => (
        <div
          key={idx}
          className={styles.workContainer}
          onClick={() => toggleWorkItem(idx)}
        >
          <div className={styles.workHeaderContainer}>
            <div className={styles.workTextContainer}>
              <h2>{workplace.companyName}</h2>
              <p>{workplace.role}</p>
              <small>{workplace.period}</small>
            </div>
            <img
              src="https://cdn.prod.website-files.com/66476c64e241589e9d182b69/668ccdcf8c39cf84da6bd553_plus.svg"
              alt=""
            />
          </div>
          <div
            className={styles.workContentContainer}
            style={{
              height: expandedWork[idx] ? "fit-content" : "0px",
            }}
          >
            <div className={styles.workContent}>
              <hr></hr>
              <p>{workplace.description}</p>
              {workplace.tasks ? <h3>Tasks</h3> : null}
              {workplace.tasks
                ? workplace.tasks.map((task, i) => (
                    <div key={i}>
                      <p>{task}</p>
                    </div>
                  ))
                : null}
              {workplace.projects ? <h3>Projects</h3> : null}
              {workplace.projects
                ? workplace.projects.map((project, i) => (
                    <div key={i}>
                      <p>{project.description}</p>
                      {project.keyPoints
                        ? project.keyPoints.map((keyPoint, kdx) => (
                            <div key={kdx}>{keyPoint}</div>
                          ))
                        : null}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
