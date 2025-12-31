export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-10">
      <article className="max-w-3xl mx-auto space-y-8">
        
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">
            HTML5 Basics Tutorial
          </h1>
          <p className="text-gray-600">
            A simple introduction to HTML for beginners
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            🧱 What is HTML?
          </h2>
          <p>
            <strong>HTML</strong> stands for <em>HyperText Markup Language</em>.
            It is the standard language used to create web pages.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            🏗️ Basic Structure
          </h2>
          <p>
            Every HTML document follows a basic structure.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`}</code>
          </pre>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            🔖 HTML Elements and Tags
          </h2>
          <p>
            HTML uses <strong>tags</strong> to define elements like headings,
            paragraphs and links.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> — headings</li>
            <li><code>&lt;p&gt;</code> — paragraph</li>
            <li><code>&lt;a&gt;</code> — links</li>
          </ul>
        </section>

      </article>
    </main>
  );
}
