import Accordion from 'react-bootstrap/Accordion';
import {AiFillPlayCircle} from 'react-icons/ai'
function FlutterCuruculam() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Introduction to Flutter</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Introducton</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span> What is Flutter </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Understand Widgets and Widget Tree</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Learning Dart Programming Language</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>What is dart</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Variables</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>List </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Functions</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Classess</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Installation and Setup</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Pre-requist</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Installation flutter SDK</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Installation Andriod Studio </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Creating first flutter project</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Scaffolding and Appbar Widgets</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Flutter Basic Widgets</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>Container Widget</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Buttons</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Row Widget </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Column Widget</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Flex and Wrap Widget</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Expended Widget </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Selectable text Widget</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Circule Avater and Clip Oval Widget</span> <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Flutter With Firebase</Accordion.Header>
        <Accordion.Body>
        <AiFillPlayCircle className='text-success mx-2 my-2'/> <span>What is firebase</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>How firebase works</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Connection between firebase and flutter </span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Saving data to firebase</span> <br />
       <AiFillPlayCircle  className='text-success mx-2 my-2'/> <span>Reading realtime data from firebase firestore</span> <br />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  );
}

export default FlutterCuruculam;