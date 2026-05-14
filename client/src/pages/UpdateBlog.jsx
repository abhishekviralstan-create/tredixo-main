import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBlogStart, updateBlogFailure, updateBlogSuccess } from '../features/blogSlice';

if (!Quill.imports["modules/imageResize"]) {
  Quill.register("modules/imageResize", ImageResize);
}
const Font = Quill.import('formats/font');
Font.whitelist = ['sans-serif', 'serif', 'monospace', 'roboto', 'poppins', 'inter'];
Quill.register(Font, true);

const UpdateBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const quillRef = useRef(null);

  const { user, currentUser } = useSelector((state) => state.userSliceApp);
  const loggedInUser = user || currentUser;

  const canEditBlog =
    loggedInUser?.isAdmin || loggedInUser?.accessLevel === 'full_access';

  const [formData, setFormData] = useState({
    blogTitle: '',
    blogCategory: '',
    customCategory: '',
    blogDesc: '',
    blogImgFile: '',
    blogBody: '',
  });

  const categories = [
    'Trading',
    'Equity Trading',
    'Intraday Trading',
    'Margin Trading',
    'Commodity Trading',
    'Dabba Trading',
    'Stock Market',
    'Indian Stock Market',
    'US Stock Market',
    'Trading News',
    'Market Insights',
    'MCX',
    'NSE',
    'Gold Rate',
    'Silver Rate',
    'Oil News',
    'Crypto',
    'Forex',
    'India Economy',
    'US Economy',
    'War Update',
  ];

  const inputChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reactQuillChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      blogBody: value,
    }));
  };

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        const quill = quillRef.current?.getEditor();
        const range = quill?.getSelection(true);

        if (quill && range) {
          quill.insertEmbed(range.index, 'image', reader.result);
          quill.setSelection(range.index + 1);
        }
      };
      reader.readAsDataURL(file);
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: Font.whitelist }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      imageResize: {
        parchment: Quill.import('parchment'),
      },
    }),
    []
  );

  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'color',
    'background',
    'align',
    'list',
    'bullet',
    'link',
    'image',
  ];

  const fetchBlog = async () => {
    try {
      const getBlog = await axios.get(`/api/blog/get-all-blogs?blogId=${blogId}`);

      if (getBlog.status === 200) {
        const response = getBlog.data.blogs?.[0];
        if (response) {
          setFormData({
            blogTitle: response.blogTitle || '',
            blogCategory: response.blogCategory || '',
            customCategory: '',
            blogDesc: response.blogDesc || '',
            blogImgFile: response.blogImgFile || '',
            blogBody: response.blogBody || '',
          });
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Failed to fetch blog');
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  const validateForm = () => {
    const selectedCategory = formData.blogCategory.trim();
    const customCategory = formData.customCategory.trim();
    const plainBody = formData.blogBody.replace(/<[^>]+>/g, '').trim();

    if (!formData.blogTitle.trim()) {
      toast.error('Blog title is required!');
      return false;
    }

    if (!selectedCategory && !customCategory) {
      toast.error('Please select a category or enter custom category!');
      return false;
    }

    if (!formData.blogDesc.trim()) {
      toast.error('Short description is required!');
      return false;
    }

    if (formData.blogDesc.trim().length < 20) {
      toast.error('Short description should be at least 20 characters!');
      return false;
    }

    if (!formData.blogImgFile.trim()) {
      toast.error('Featured image URL is required!');
      return false;
    }

    if (!/^https?:\/\/.+/i.test(formData.blogImgFile.trim())) {
      toast.error('Please enter a valid image URL!');
      return false;
    }

    if (!plainBody) {
      toast.error('Blog content is required!');
      return false;
    }

    if (plainBody.length < 20) {
      toast.error('Blog content must be at least 20 characters!');
      return false;
    }

    return true;
  };

  const updateBlogPost = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const finalCategory = formData.blogCategory.trim() || formData.customCategory.trim();

    try {
      dispatch(updateBlogStart());

      const payload = {
        ...formData,
        blogCategory: finalCategory,
      };

      const updateBlog = await axios.put(`/api/blog/update-blog/${blogId}`, payload, {
        headers: {
          Authorization: `Bearer ${loggedInUser?.token}`,
        },
        withCredentials: true,
      });

      if (updateBlog.status === 200) {
        const response = updateBlog.data.blog;
        dispatch(updateBlogSuccess(response));
        toast.success('Blog updated successfully');
        navigate(`/blog/${response.slug}`);
      }
    } catch (error) {
      dispatch(updateBlogFailure(error.message));
      console.error(error.message);
      toast.error('Blog update failed');
    }
  };

  if (!canEditBlog) {
    return (
      <>
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
          <div className="rounded-3xl border border-white/10 bg-[#0b0f14] px-8 py-10 text-center max-w-lg">
            <h2 className="text-2xl font-bold">Access Denied</h2>
            <p className="mt-3 text-white/60">
              You do not have permission to edit blogs.
            </p>
          </div>
        </div>
        <Toaster />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white px-4 md:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Update Blog</h1>
            <p className="mt-2 text-white/55">
              Update your article content, image, description, and formatting from one place.
            </p>
          </div>

          <form
            onSubmit={updateBlogPost}
            className="rounded-[28px] border border-white/10 bg-[#0b0f14] p-5 md:p-8 shadow-[0_0_30px_rgba(0,255,255,0.04)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-8">
                <label className="mb-2 block text-sm font-medium text-white/70">Blog Title</label>
                <input
                  type="text"
                  placeholder="Blog Title"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#11161d] px-4 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/30"
                  name="blogTitle"
                  onChange={inputChangeHandle}
                  value={formData.blogTitle}
                />
              </div>

              <div className="lg:col-span-4">
                <label className="mb-2 block text-sm font-medium text-white/70">Category</label>
                <select
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#11161d] px-4 text-white outline-none focus:border-cyan-400/30"
                  name="blogCategory"
                  onChange={inputChangeHandle}
                  value={formData.blogCategory}
                >
                  <option value="">Select Category</option>
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-6">
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Custom Category
                </label>
                <input
                  type="text"
                  placeholder="Optional custom category"
                  name="customCategory"
                  value={formData.customCategory}
                  onChange={inputChangeHandle}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#11161d] px-4 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/30"
                />
              </div>

              <div className="lg:col-span-6">
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Short Description
                </label>
                <input
                  type="text"
                  placeholder="Short blog description"
                  name="blogDesc"
                  value={formData.blogDesc}
                  onChange={inputChangeHandle}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#11161d] px-4 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/30"
                />
              </div>

              <div className="lg:col-span-12">
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Featured Image URL
                </label>
                <input
                  type="text"
                  placeholder="Paste featured image URL"
                  name="blogImgFile"
                  value={formData.blogImgFile}
                  onChange={inputChangeHandle}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#11161d] px-4 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/30"
                />
              </div>

              {formData.blogImgFile && (
                <div className="lg:col-span-12">
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0f1319] p-3">
                    <img
                      src={formData.blogImgFile}
                      className="h-[260px] md:h-[420px] w-full rounded-[18px] object-cover"
                      alt="Blog preview"
                    />
                  </div>
                </div>
              )}

              <div className="lg:col-span-12">
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Blog Content
                </label>
                <div className="editor-dark rounded-[24px] border border-white/10 overflow-hidden bg-[#11161d]">
                  <ReactQuill
                    ref={quillRef}
                    className="min-h-[420px]"
                    onChange={reactQuillChange}
                    value={formData.blogBody}
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    placeholder="Update your blog content..."
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
              >
                Update Changes
              </button>

              <button
                type="button"
                onClick={fetchBlog}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/5"
              >
                Reset Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default UpdateBlog;