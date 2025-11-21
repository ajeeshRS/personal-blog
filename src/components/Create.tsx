import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface Blog {
  _id: string;
  title: string;
  blogContent: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const BlogEditor: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link', 'image', 'code-block'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'color',
    'background',
    'link',
    'image',
    'code-block',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBlog: Blog = {
      _id: `blog_${Date.now()}`,
      title: title,
      blogContent: content,
      tags: tags.split(',').map((tag) => tag.trim()).filter((tag) => tag !== ''),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    };

    setBlogs([...blogs, newBlog]);

    // Reset form
    setTitle('');
    setContent('');
    setTags('');

    console.log('Blog saved:', newBlog);
    console.log('All blogs:', [...blogs, newBlog]);
  };

//   const exportToFile = () => {
//     const dataStr = JSON.stringify(blogs, null, 2);
//     const dataBlob = new Blob([dataStr], { type: 'application/json' });
//     const url = URL.createObjectURL(dataBlob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'blogs.json';
//     link.click();
//     URL.revokeObjectURL(url);
//   };

  const copyToClipboard = async () => {
  try {
    const jsonStr = JSON.stringify(blogs[0], null, 2); 
    await navigator.clipboard.writeText(jsonStr);
    alert('Blogs JSON copied to clipboard!');
  } catch (error) {
    alert('Failed to copy blogs JSON to clipboard.');
    console.error('Clipboard copy failed:', error);
  }
};


  return (
    <div className="max-w-4xl mx-auto p-6 font-oxygen">
      <h1 className="my-5 text-5xl font-bold mb-8 text-[#3D7FDC] font-crimson">Post to it</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder=""
            required
            className="w-full px-4 py-2.5 text-base border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Content
          </label>
          <div className="border border-gray-300 overflow-hidden">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              placeholder=""
              className="bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-semibold text-gray-700 mb-2">
            Tags
          </label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder=""
            className="w-full px-4 py-2.5 text-base border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-3 text-base font-medium text-white bg-[#3D7FDC] rotate-180 hover:rotate-0 focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Save Blog
          </button>

          <button
            type="button"
            onClick={copyToClipboard}
            disabled={blogs.length === 0}
            className="px-6 py-3 text-base font-medium text-white bg-black  focus:ring-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Copy
          </button>
        </div>
      </form>

      {blogs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Saved Blogs ({blogs.length})
          </h2>
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {blog.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: blog.blogContent }}
                  className="prose prose-sm max-w-none mb-4 text-gray-700"
                />
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  Created: {new Date(blog.createdAt).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogEditor;
