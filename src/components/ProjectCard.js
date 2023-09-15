import {Col} from "react-bootstrap";
export const ProjectCard = ({title, description, imgUrl, projectLink}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <img src={imgUrl}/>
            </a>
                <div className="proj-txtx">
                    <h4> <a href={projectLink} target="_blank" rel="noopener noreferrer"  style={{ textDecoration: "none", color:"white" }}>
                        {title}
                        </a>
                    </h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}