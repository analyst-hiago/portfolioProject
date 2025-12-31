export default function App() {
  return (
    <>
      <header>
        <h1>📘 HTML5 Basics</h1>
        <p>A simple and direct introduction to HTML5</p>
      </header>

      <main>
        <article>

          <section>
            <h2>🧩 What is HTML?</h2>
            <p>
              <strong>HTML</strong> stands for <strong>HyperText Markup Language</strong>.
              It is the standard language used to create web pages.
            </p>
            <p>
              HTML is responsible for the <em>structure</em> of a website, not its style or behavior.
            </p>
          </section>

          <section>
            <h2>🏗️ Basic Structure</h2>
            <p>
              Every HTML document follows a basic structure. Below is the minimum required:
            </p>

            <pre>
              <code>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    Content goes here
  </body>
</html>`}
              </code>
            </pre>

            <p>
              The <strong>&lt;body&gt;</strong> tag contains everything visible on the page.
            </p>
          </section>

          <section>
            <h2>🔖 HTML Elements and Tags</h2>
            <p>
              HTML uses <strong>tags</strong> to define elements.
            </p>

            <ul>
              <li><strong>&lt;h1&gt;</strong> to <strong>&lt;h6&gt;</strong> — titles</li>
              <li><strong>&lt;p&gt;</strong> — paragraphs</li>
              <li><strong>&lt;a&gt;</strong> — links</li>
              <li><strong>&lt;img&gt;</strong> — images</li>
            </ul>

            <pre>
              <code>
{`<p>This is a simple paragraph.</p>`}
              </code>
            </pre>
          </section>

          <section>
            <h2>🧠 Text Hierarchy</h2>

            <h3>This is an H3 heading</h3>
            <p>Used for subsections.</p>

            <h4>This is an H4 heading</h4>
            <p>Used for smaller sections.</p>

            <p>
              Use headings in order to keep your document <strong>clear and readable</strong>.
            </p>
          </section>

          <section>
            <h2>🚀 Final Notes</h2>
            <p>
              HTML is easy to learn and very powerful.
              With just a few tags, you can already build real websites.
            </p>
            <p>
              The next steps are learning <strong>CSS</strong> for styling and
              <strong>JavaScript</strong> for interactivity.
            </p>
          </section>

        </article>
      </main>

      <footer>
        <p>© 2025 — HTML5 Tutorial</p>
      </footer>
    </>
  );
}
