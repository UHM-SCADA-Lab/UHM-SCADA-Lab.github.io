import React from 'react';
import { Figure } from 'react-bootstrap';

const WebsiteHistory = () => (
  <span>
    <h3>Why do we use React?</h3>
    <p>The SCADA Lab website is the primary source of documentation for the entire class and our individual teams. In previous semesters, this documentation was maintained on the class’s Laulima site via the Wiki tool. Although this method was fairly straightforward, the website had a very simplistic visual appearance because we could only utilize Markdown, which is limited in scope. We ultimately wanted more room for customization and a website we could navigate to instead of having to log in to Laulima every time.</p>
    <img src="/images/KnowledgeManagement/laulima.PNG" alt="Laulima SCADA website" style={{ maxWidth: '600px' }} />
    <p className="pt-3">This led our previous Knowledge Management lead to build a website from the ground up utilizing HTML/CSS. It was completed toward the end of the Fall 2022 semester. While this was an arduous process, it resulted in a more visually appealing website with an improved navigational structure. We utilized this iteration of our website for the remainder of the Fall 2022 semester and for a portion of the Spring 2023 semester.</p>
    <p>Although we were mostly satisfied with the appearance of our website, we discovered some formatting issues, such as the inability of the navigation bar to adjust based on the browser window size.</p>
    <Figure>
      <Figure.Image style={{ maxWidth: '800px', borderStyle: 'solid' }} src="/images/KnowledgeManagement/html_website.PNG" alt="Original HTML/CSS website" />
      <Figure.Caption className="text-center">The cut-off navigation bar on the original website</Figure.Caption>
    </Figure>
    <p>As a few people within the lab had prior experience working with React, a Javascript framework, we began to consider the option of using it for our website. One reason we liked the idea of utilizing it was because React allows us to break up different website elements into components, allowing us to import various elements easily to different sections. In addition, React does not require the use of &lt;div&gt; tags to create different elements such as rows, columns, and containers, giving the code a much cleaner appearance. We also wanted to utilize the library React-Bootstrap, which uses Bootstrap, a CSS framework that automatically styles different components of a website, to create React components.</p>
    <p>Before moving forward, we polled the class to see how open they were to a conversion of the SCADA Lab website from HTML/CSS to React. We put together a demonstration of how the website would look when converted to React and also showed members how the website code would be organized. All members ended up voting in favor of the change.</p>
    <p>With the transition to React, the website could be viewed easily on any device, including mobile phones and tablets.</p>
    <Figure>
      <Figure.Image style={{ maxWidth: '600px', borderStyle: 'solid' }} src="/images/KnowledgeManagement/landscape_website.png" alt="React website on a phone" />
      <Figure.Caption className="text-center">Mobile view of our website</Figure.Caption>
    </Figure>
  </span>
);

export default WebsiteHistory;
