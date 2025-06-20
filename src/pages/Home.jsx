import { Link } from 'react-router-dom';

const Home = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to set up your first project.',
      date: 'May 11, 2023',
      category: 'React',
    },
    {
      id: 2,
      title: 'Styling with Tailwind CSS',
      excerpt: 'Discover how to use Tailwind CSS to style your React applications.',
      date: 'May 10, 2023',
      category: 'CSS',
    },
    {
      id: 3,
      title: 'React Router for Navigation',
      excerpt: 'Learn how to implement navigation in your React app using React Router.',
      date: 'May 9, 2023',
      category: 'React',
    },
    {
      id: 4,
      title: 'Styling with Vanilla Css',
      excerpt: 'Learn how to style web pages with pure CSS (no frameworks or preprocessors).',
      date: 'February 5, 2022',
      category: 'Css',
    },
    {
      id: 5,
      title: 'Html',
      excerpt: 'Learn the basics of HTML and how to create web pages in easy simple way!',
      date: 'April 9, 2020',
      category: 'Html',
    },
    {
      id: 6,
      title: 'JavaScript Fundamentals',
      excerpt: 'Master the core concepts of JavaScript programming language.',
      date: 'June 15, 2023',
      category: 'JavaScript',
    }
  ];

  return (
    <div className="container mx-auto min-h-screen px-4 sm:px-8 md:px-15 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-sky-100 mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-sky-300">Sharing thoughts and knowledge about web development</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-700 w-full rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-cyan-400 font-semibold">{post.category}</span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-sky-100 mb-2">{post.title}</h2>
              <p className="text-sky-300 mb-7 mt-5">{post.excerpt}</p>
              <div className='flex justify-start items-end'>
              <Link 
                to={`/blog/${post.id}`} 
                className="inline-block bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors duration-300 shadow hover:shadow-md"
              >
                Read More
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

