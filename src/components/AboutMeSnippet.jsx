import '../styles/home.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const AboutMeSnippet = () => {
  return (
    <Card className="about-me-snippet p-4">
      <Card.Title className="text-primary fw-bold">Cherie's Blurbs</Card.Title>
      <Card.Text>
        Dedicated marketing and communications professional with over a decade of experience in the field. 
        Expertise spans strategic communications, digital marketing, branding, social media, public relations, 
        and marketing research. Recently, my focus has been on website development and SEO, leveraging my skills 
        to create optimized, high-performing websites. I also have experience in marketing/competitive analysis, 
        sponsorship development, and account management. Looking ahead, I plan to expand my portfolio with more 
        apps and projects, integrating my marketing expertise with innovative digital solutions.
      </Card.Text>

      <a href="/about" className="read-more">Read More</a>

      {/* Bootstrap Accordion */}
      <Accordion defaultActiveKey="0" className="mt-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>🎓 Education</Accordion.Header>
          <Accordion.Body>
            <p><strong>B.A. Public Relations</strong> - Marshall University</p>
            <p><strong>M.S. Corporate & Public Communications</strong> - Florida State University</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>💼 Interests</Accordion.Header>
          <Accordion.Body>
            <p>SEO, Digital Marketing, Google Ads, AI & Websites</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>🎯 Hobbies</Accordion.Header>
          <Accordion.Body>
            <p>Reading, hanging with my cats, learning astrology, brewing beer, and running.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};

export default AboutMeSnippet;

