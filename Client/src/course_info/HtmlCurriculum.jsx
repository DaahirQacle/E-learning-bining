import Accordion from 'react-bootstrap/Accordion';
import {AiFillPlayCircle} from 'react-icons/ai'
function HtmlCurriculum() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Introduction to THML</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Course introduction</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Install IDE </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Create html syntex</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Introduction of modern css</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>embeded and external css</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>div elements</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>float properts </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>spacing margin and padding</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>html forms</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Selectors</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Class </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>ID</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Tag </span> <br />

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Projects</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Navigation bar</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>side bar</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>dropdown menus </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>tables</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Registeration form</span> <br />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  );
}

export default HtmlCurriculum;