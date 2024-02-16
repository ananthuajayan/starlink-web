import Accordion from 'react-bootstrap/Accordion';

function Accordian() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why Choosing Star Link Trading - FZCO</Accordion.Header>
        <Accordion.Body>
        Quality Assurance: Our commitment to quality is unwavering. Each product undergoes rigorous testing to ensure durability, functionality, and compliance with industry standards.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Our Customization ?</Accordion.Header>
        <Accordion.Body>
        We understand that one size does not fit all. Tailor our containers, motor homes, caravans, and container offices to meet your specific needs, ensuring a personalized touch to your project.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Why Our Product The Best</Accordion.Header>
        <Accordion.Body>
        Starlink Trading - FZCO is dedicated to environmental responsibility. Our products are designed with eco-friendly materials and sustainable practices, aligning with our commitment to a greener future.Your satisfaction is our priority. Experience seamless transactions, timely deliveries, and exceptional customer service throughout your journey with Starlink Trading - FZCO.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordian;