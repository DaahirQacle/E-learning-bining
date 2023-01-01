import Accordion from 'react-bootstrap/Accordion';
import {AiFillPlayCircle} from 'react-icons/ai'
function OracleCurriculam() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Introduction Oracle</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>what is Database</span> <br />
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>what is Oracle</span> <br />
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Installation tools and setup</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Oracle Concepts</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>create database</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>create table</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>insert data </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>select data</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>update data</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>delete data</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Advanced Oracle Concepts</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>join tables</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>aggregation functions </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Constraints</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>triggers</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>procedures</span> <br />
        </Accordion.Body>
      </Accordion.Item>
 
    </Accordion>
    
  );
}

export default OracleCurriculam;