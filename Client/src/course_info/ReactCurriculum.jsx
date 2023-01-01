import Accordion from 'react-bootstrap/Accordion';
import {AiFillPlayCircle} from 'react-icons/ai'
function ReactCurriculum() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Introduction React</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>what is React</span> <br />
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Installation tools and setup</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>React Concepts</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>create first react app</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>folder structure</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>write first code </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>JSX</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>react components</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>react props</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>React Hooks</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>useState</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>useEffect </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>useReduce</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>useRef</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>useContext</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Advanced React</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>react router dom</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>dynamic</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>layouts </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>global state management</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>redux</span> <br />
     
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Projects</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Taxbiix app</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Social media app</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Task management app </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>E-learning web</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>E-Commerce web</span> <br />

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  );
}

export default ReactCurriculum;