import Image from 'next/image'
import styles from './Criteria.module.scss'
import pwaImage from '../../../../images/landing/our-blogs/pwa-framework.webp'
import reactImage from '../../../../images/landing/our-blogs/react.webp'
import motionUIImage from '../../../../images/landing/our-blogs/motion-ui.jpg'

const Criteria = () => {
  return (
    <div className={styles['criteria']}>
      <div className={styles['criteria-critery']}>
        <div className={styles['criteria-critery-header']}>
          <h2>1. Progressive Web Apps (PWAs)</h2>
        </div>
        <Image src={pwaImage} alt='PWA Image' />
        <div className={styles['criteria-critery-sections']}>
          <div>
            <h3>What are PWAs?</h3>
            <p>
              Progressive Web Apps, or PWAs, are web applications that deliver
              an app-like experience to users. They&apos;re fast, reliable, and,
              most importantly, work in any browser.
            </p>
          </div>
          <div>
            <h3>Why are PWAs important?</h3>
            <div>
              Here are some key reasons why PWAs are a trend to watch in 2023:
              <ul>
                <li>
                  Work offline: PWAs can function without an internet
                  connection, providing an uninterrupted user experience.
                </li>
                <li>
                  Installable: Users can install PWAs on their devices, just
                  like native apps.
                </li>
                <li>
                  Push notifications: PWAs can send notifications, keeping users
                  engaged.
                </li>
              </ul>
              Companies like Twitter and Starbucks have already seen success
              with their PWAs, proving that this trend is worth considering. At
              Admiral Studios, we offer comprehensive PWA development services
              tailored to your business needs.
            </div>
          </div>
        </div>
      </div>
      <div className={styles['criteria-critery']}>
        <div className={styles['criteria-critery-header']}>
          <h2>2. Artificial Intelligence and Bots</h2>
          <p>
            Artificial intelligence (AI) has been making waves in various
            sectors, and web development is no different.
          </p>
        </div>
        <div className={styles['criteria-critery-sections']}>
          <div>
            <h3>How AI is Changing Web Development</h3>
            <div>
              Here&apos;s how AI and bots are revolutionizing web development:
              <ol>
                <li>
                  Automating tasks: AI can help automate repetitive tasks,
                  saving developers time.
                </li>
                <li>
                  Personalization: AI can provide personalized experiences to
                  users based on their preferences and behavior.
                </li>
                <li>
                  Enhancing web accessibility: AI can improve website
                  accessibility, making it user-friendly for people with
                  disabilities.
                </li>
              </ol>
              One typical implementation of AI in web development is the use of
              chatbots. These AI-powered tools can handle customer inquiries
              24/7, providing instant support and freeing up valuable time for
              your team. As more businesses recognize the efficiency and
              effectiveness of AI and bots, we expect this trend to grow in
              2023.
            </div>
          </div>
        </div>
      </div>
      <div className={styles['criteria-critery']}>
        <div className={styles['criteria-critery-header']}>
          <h2>3. JavaScript Frameworks and Libraries</h2>
          <p>
            Despite the emergence of new languages and tools, JavaScript remains
            an essential player in the world of web development. Its frameworks
            and libraries, such as React and Vue.js, offer developers efficient
            ways to build interactive user interfaces.
          </p>
        </div>
        <Image src={reactImage} alt='ReactJS Image' />
        <div className={styles['criteria-critery-sections']}>
          <div>
            <h3>Why Choose React or Vue.js?</h3>
            Let&apos;s compare these two popular JavaScript tools:
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th>React</th>
                  <th>Vue.js</th>
                </tr>
                <tr>
                  <td>Popularity</td>
                  <td>
                    React&apos;s robust ecosystem and flexibility make it a
                    popular choice among developers.
                  </td>
                  <td>
                    Vue.js is praised for its simplicity and easy learning
                    curve.
                  </td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>
                    React offers high performance for complex applications.
                  </td>
                  <td>
                    Vue.js provides fast rendering and a lightweight footprint.
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Choosing the proper framework or library often depends on the
              project requirements. Need help to decide? Admiral Studios can
              guide you and provide expert web development services.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['criteria-critery']}>
        <div className={styles['criteria-critery-header']}>
          <h2>4. API-First Development</h2>
        </div>
        <div className={styles['criteria-critery-sections']}>
          <div>
            <h3>Understanding API-First Development</h3>
            <div>
              API-First development is an approach where the application
              programming interfaces (APIs) are designed and built before the
              actual software. This method enables seamless integration and
              consistency across multiple platforms and devices, offering
              numerous benefits, such as:
              <ul>
                <li>
                  Speedy development cycle: By designing the API first,
                  front-end and back-end developers can work simultaneously,
                  reducing the overall development time.
                </li>
                <li>
                  Interoperability: API-first development ensures your
                  application can communicate with other applications easily,
                  enhancing its functionality and usability.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>The Role of API-First Development in 2023</h3>
            <p>
              As businesses continue to rely on multiple platforms (web, mobile,
              IoT devices, etc.), API-first development will likely become more
              critical in 2023. This approach will be essential in creating
              seamless user experiences across all platforms. Companies like
              Shopify and Adobe have already adopted the API-first approach,
              enhancing their cross-platform capabilities and setting an example
              for other businesses.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['criteria-critery']}>
        <div className={styles['criteria-critery-header']}>
          <h2>5. Motion UI</h2>
        </div>
        <Image src={motionUIImage} alt='Motion UI Image' />
        <div className={styles['criteria-critery-sections']}>
          <div>
            <h3>The Appeal of Motion UI</h3>
            <div>
              Motion UI is a trend that focuses on creating intuitive, engaging
              interfaces using animation. When done correctly, it can guide
              users, highlight essential elements, and make interactions more
              enjoyable. Here are a few reasons why Motion UI is becoming
              popular:
              <ul>
                <li>
                  Enhances user engagement: Well-executed animations can make a
                  website more interactive and engaging.
                </li>
                <li>
                  Provides visual feedback: Motion UI can provide users with
                  immediate feedback on their actions, improving the overall
                  user experience.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>The Impact of Motion UI on Web Development</h3>
            <p>
              As web users seek more interactive and immersive experiences, we
              expect Motion UI to become increasingly important in 2023. The
              aesthetic appeal and improved user engagement brought about by
              effective Motion UI design can give your website a competitive
              edge. For example, Google&apos;s Material Design includes
              guidelines for motion design, signifying its importance in modern
              web development.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['criteria-critery']}>
        <div className={styles['criteria-critery-header']}>
          <h2>Conclusion</h2>
          <p>
            In conclusion, the top 5 web development trends to watch in 2023 are
            Progressive Web Apps, Artificial Intelligence and Bots, JavaScript
            Frameworks and Libraries, API-First Development, and Motion UI. As
            the digital landscape evolves, staying updated with these trends
            will be crucial for businesses and web developers. At Admiral
            Studios, we pride ourselves on being at the forefront of these
            trends, providing top-notch web development services tailored to
            your business needs. Contact us today to learn how we can help your
            business thrive in the digital age.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Criteria
