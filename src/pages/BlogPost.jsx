import { useEffect } from 'react';
import { useParams, Link, useNavigate  } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const Navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      content: `
        <p>React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.</p>
        
        <p>React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.</p>
        
        <p>To get started with React, you need to have Node.js installed on your computer. You can then create a new React project using Create React App or Vite.</p>
        
        <h2>Setting up a React project with Vite</h2>
        
        <p>Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. Here's how to set up a React project with Vite:</p>
        
        <ol>
          <li>Run <code>npm create vite@latest my-app --template react</code></li>
          <li>Navigate to your project directory: <code>cd my-app</code></li>
          <li>Install dependencies: <code>npm install</code></li>
          <li>Start the development server: <code>npm run dev</code></li>
        </ol>
        
        <p>And that's it! You now have a React project set up and ready to go.</p>
      `,
      date: 'May 11, 2023',
      author: 'John Doe',
      category: 'React',
    },
    {
      id: 2,
      title: 'Styling with Tailwind CSS',
      content: `
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build designs directly in your markup. Instead of writing custom CSS, you apply pre-existing classes directly to your HTML elements.</p>
        
        <p>Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML. It's highly customizable and can be configured to your project's specific needs.</p>
        
        <h2>Setting up Tailwind CSS in a React project</h2>
        
        <ol>
          <li>Install Tailwind CSS and its dependencies: <code>npm install -D tailwindcss postcss autoprefixer</code></li>
          <li>Generate the configuration files: <code>npx tailwindcss init -p</code></li>
          <li>Configure your template paths in <code>tailwind.config.js</code>:
            <pre>
              module.exports = {
                content: [
                  "./index.html",
                  "./src/**/*.{js,ts,jsx,tsx}",
                ],
                theme: {
                  extend: {},
                },
                plugins: [],
              }
            </pre>
          </li>
          <li>Add the Tailwind directives to your CSS:
            <pre>
              @tailwind base;
              @tailwind components;
              @tailwind utilities;
            </pre>
          </li>
        </ol>
        
        <p>Now you can start using Tailwind's utility classes in your React components!</p>
      `,
      date: 'May 10, 2023',
      author: 'Jane Smith',
      category: 'CSS',
    },
    {
      id: 3,
      title: 'React Router for Navigation',
      content: `
        <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
        
        <h2>Setting up React Router</h2>
        
        <p>To add React Router to your project, you need to install it first:</p>
        
        <pre>npm install react-router-dom</pre>
        
        <p>Once installed, you can set up your routes in your main component:</p>
        
        <pre>
          import { BrowserRouter, Routes, Route } from 'react-router-dom';
          import Home from './pages/Home';
          import About from './pages/About';
          import Contact from './pages/Contact';
          
          function App() {
            return (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </BrowserRouter>
            );
          }
        </pre>
        
        <p>With this setup, your application will render different components based on the URL path.</p>
      `,
      date: 'May 9, 2023',
      author: 'Alex Johnson',
      category: 'React',
    },
    {
      id: 4,
      title: 'Styling with Vanilla CSS',
      content: `
        <div class="prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto py-8">
            <h1 class="text-3xl font-bold text-sky-100 mb-6">Vanilla CSS: Styling the Web</h1>
            
            <div class="max-w-none">
              <p class="mb-4">
                CSS (Cascading Style Sheets) is the language used to style and layout web pages. While there are many CSS frameworks and preprocessors available today, understanding vanilla (pure) CSS is essential for any web developer.
              </p>
              
              <h2 class="text-2xl font-bold text-sky-200 mt-6 mb-4">Core CSS Concepts</h2>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2"><strong>Selectors</strong> - Target HTML elements to apply styles</li>
                <li class="mb-2"><strong>Properties</strong> - Visual aspects you can change (color, size, etc.)</li>
                <li class="mb-2"><strong>Values</strong> - Specific settings for properties</li>
                <li class="mb-2"><strong>Cascade</strong> - How styles override each other based on specificity</li>
                <li class="mb-2"><strong>Inheritance</strong> - How styles pass from parent to child elements</li>
                <li class="mb-2"><strong>Box Model</strong> - How elements are sized with content, padding, border, and margin</li>
              </ul>
            </div>
        </div>
      `,
      date: 'April 9, 2020',
      author: 'Alex Johnson',
      category: 'CSS'
    },
    {
      id: 5,
      title: 'HTML Basics',
      content: `
        <div class="prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto py-8">
            <h1 class="text-3xl font-bold text-sky-100 mb-6">HTML: The Building Blocks of the Web</h1>
            
            <div class="max-w-none">
              <p class="mb-4">
                HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document.
              </p>
              
              <h2 class="text-2xl font-bold text-sky-200 mt-6 mb-4">Key HTML Concepts</h2>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2"><strong>Elements</strong> - The building blocks of HTML pages</li>
                <li class="mb-2"><strong>Tags</strong> - Used to create elements</li>
                <li class="mb-2"><strong>Attributes</strong> - Provide additional information about elements</li>
                <li class="mb-2"><strong>Semantic HTML</strong> - Using elements that carry meaning</li>
              </ul>
            </div>
        </div>
      `,
      date: 'February 5, 2022',
      author: 'Alex Johnson',
      category: 'HTML'
    },
    {
      id: 6,
      title: 'JavaScript Fundamentals',
      content: `
        <div class="prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto py-8">
            <h1 class="text-3xl font-bold text-sky-100 mb-6">Vanilla JavaScript: The Core of Web Interactivity</h1>
            
            <div class="max-w-none">
              <p class="mb-4">
                Vanilla JavaScript refers to using JavaScript without any additional libraries or frameworks. It's the foundation of web programming and essential for any web developer to master.
              </p>
              
              <h2 class="text-2xl font-bold text-sky-200 mt-6 mb-4">Key JavaScript Concepts</h2>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2"><strong>Variables and Data Types</strong> - Storing and manipulating data</li>
                <li class="mb-2"><strong>Functions</strong> - Reusable blocks of code</li>
                <li class="mb-2"><strong>DOM Manipulation</strong> - Interacting with HTML elements</li>
                <li class="mb-2"><strong>Events</strong> - Responding to user actions</li>
                <li class="mb-2"><strong>Asynchronous JavaScript</strong> - Handling operations that take time</li>
              </ul>
            </div>
        </div>
      `,
      date: 'June 15, 2023',
      author: 'Emily Brown',
      category: 'JavaScript'
    }
  ];

  const post = blogPosts.find((post) => post.id === parseInt(id));
      useEffect(() => {
        if (!post) {
        setTimeout(() => {
          Navigate(-1);
        },2000);
      }
      })
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-sky-200 mt-5">
        <h1 className="text-3xl font-bold text-sky-500 mb-4 mt-8">Blog Post Not Found</h1>
        <p className="text-xl text-sky-300 mb-6">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 text-sky-200">
      <div className="max-w-3xl mx-auto bg-gray-700 rounded-lg shadow-xl overflow-hidden p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-cyan-400 font-semibold">{post.category}</span>
            <span className="text-sm text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-3xl font-bold text-sky-100 mb-2">{post.title}</h1>
          <p className="text-sky-300">By {post.author}</p>
        </div>
        
        <div 
          className="prose prose-invert max-w-none text-sky-200"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div className="mt-8">
          <Link 
            to="/" 
            className="inline-block bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors duration-300 shadow hover:shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

