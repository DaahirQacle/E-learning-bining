import Accordion from 'react-bootstrap/Accordion';
import {AiFillPlayCircle} from 'react-icons/ai'
function JavascriprCurriculum() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Introduction Javascript</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>what is javascript</span> <br />
       {/* <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span> What is Flutter </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Understand Widgets and Widget Tree</span> <br /> */}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Environment Setup</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Environment Setup</span> <br />
       {/* <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Variables</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>List </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Functions</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Classess</span> <br /> */}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Basic JavaScript For Beginners</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Variables</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Operators </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Arithmetic Operators</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Comparism Operators</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Logic Operator</span> <br />

       <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Control flow if else </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Switch Statements</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Loops for loops</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>loops while loop</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>loops do while loop</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Advanced Javascript</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Objects</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Functions</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Arrays </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Cloure</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Async</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Destructure </span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Projects</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>To do List project</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Twitter Character Count project</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Calculator project </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Weather App project</span> <br />

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  );
}

export default JavascriprCurriculum;