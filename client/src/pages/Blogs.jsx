import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import Spinner from '../assests/spinner/Spinner';

const POSTS_PER_PAGE = 7;

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/blog/get-all-blogs?limit=100');

        if (response.status === 200) {
          const blogs = response?.data?.blogs || [];

          const sortedBlogs = [...blogs].sort(
            (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
          );

          setAllBlogs(sortedBlogs);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllBlogs();
  }, []);

  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);

  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    return allBlogs.slice(start, end);
  }, [allBlogs, currentPage]);

  const featuredBlog = currentBlogs[0];
  const remainingBlogs = currentBlogs.slice(1);

  const formatDate = (dateString) => {
    if (!dateString) return 'Latest Update';
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return 'Latest Update';

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  };

  const getPlainText = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  };

  const sanitizePreviewText = (text) => {
    if (!text) return '';

    return text
      .replace(/\s+/g, ' ')
      .replace(/([^\s]{28})(?=[^\s])/g, '$1 ')
      .trim();
  };

  const getBlogPreview = (blog, limit = 170) => {
    const description = sanitizePreviewText(blog?.blogDesc?.trim() || '');
    if (description) {
      return description.length > limit ? `${description.slice(0, limit)}...` : description;
    }

    const bodyText = sanitizePreviewText(getPlainText(blog?.blogBody || ''));
    if (bodyText) {
      return bodyText.length > limit ? `${bodyText.slice(0, limit)}...` : bodyText;
    }

    return '';
  };

  const estimatedReadTime = (content) => {
    const text = content || '';
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(3, Math.ceil(words / 200));
    return `${minutes} MIN READ`;
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <>
      <Helmet>
        <title>Tredixo Blog | Latest Market News & Insights
</title>
        <meta
          name="description"
          content="Stay updated with Tredixo's blog. Get the latest news, market trends, and trading tips to enhance your trading journey."
        />
        <meta
          name="keywords"
          content="Tredixo blogs, trading blogs, market news, stock market analysis, forex insights, commodity updates, crypto news, trading articles"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredixo.com/blogs" />

        <meta property="og:title" content="Tredixo Blogs | Latest Market News & Trading Insights" />
        <meta
          property="og:description"
          content="Explore premium market insights, trading stories, and the latest analysis from Tredixo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tredixo.com/blogs" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tredixo Blogs | Latest Market News & Trading Insights" />
        <meta
          name="twitter:description"
          content="Read premium trading insights, market analysis, and latest news updates from Tredixo."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 md:px-6 lg:px-8 pb-20 pt-10">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-28">
              <Spinner />
            </div>
          ) : (
            <>
              {featuredBlog && (
                <motion.div
                  key={featuredBlog._id || featuredBlog.slug || currentPage}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="relative overflow-hidden rounded-[26px] border border-cyan-500/20 bg-[#07090d] shadow-[0_0_30px_rgba(0,255,255,0.06)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">
                    <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center min-w-0">
                      <span className="inline-flex w-fit rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[2px] text-lime-300">
                        Featured Analysis
                      </span>

                      <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words max-w-full overflow-hidden">
                        {featuredBlog.blogTitle}
                      </h1>

                      <p className="mt-5 max-w-xl text-sm md:text-base leading-8 text-white/65 break-words overflow-hidden">
                        {getBlogPreview(featuredBlog, 220)}
                      </p>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                          to={`/blog/${featuredBlog.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                        >
                          Read Full Report
                          <FiArrowRight />
                        </Link>

                        <span className="text-xs md:text-sm text-white/40">
                          {formatDate(featuredBlog.createdAt)} •{' '}
                          {estimatedReadTime(
                            getPlainText(featuredBlog.blogBody || featuredBlog.blogDesc || '')
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="relative min-h-[280px] lg:min-h-full">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.18),transparent_55%)]" />
                      <img
                        src={featuredBlog.blogImgFile}
                        alt={featuredBlog.blogTitle}
                        className="h-full w-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/30" />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentBlogs.length > 0 ? (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {remainingBlogs.map((blog, index) => (
                    <motion.div
                      key={blog._id || blog.slug || index}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      className="overflow-hidden rounded-[20px] border border-cyan-500/10 bg-[linear-gradient(180deg,#0a0d12_0%,#121418_100%)] shadow-[0_0_16px_rgba(0,255,255,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                    >
                      <Link to={`/blog/${blog.slug}`} className="block">
                        <div className="relative h-[250px] overflow-hidden">
                          <img
                            src={blog.blogImgFile}
                            alt={blog.blogTitle}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <span className="absolute left-4 top-4 inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.5px] text-lime-300">
                            {blog.blogCategory || 'Market Insights'}
                          </span>
                        </div>

                        <div className="p-5 min-w-0">
                          <div className="mb-4 text-[11px] uppercase tracking-wide text-white/30">
                            {formatDate(blog.createdAt)} •{' '}
                            {estimatedReadTime(getPlainText(blog.blogBody || blog.blogDesc || ''))}
                          </div>

                          <h3 className="text-2xl font-semibold leading-tight text-white break-words overflow-hidden">
                            {blog.blogTitle}
                          </h3>

                          <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/55 break-words overflow-hidden">
                            {getBlogPreview(blog, 150)}
                          </p>

                          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                            Read Story <FiArrowRight />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="mt-16 rounded-3xl border border-white/10 bg-[#0d0f13] p-10 text-center">
                  <h3 className="text-2xl font-semibold">No blogs found</h3>
                  <p className="mt-3 text-white/55">No articles available right now.</p>
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-14 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0f1217] text-white/70 transition-all disabled:opacity-40"
                  >
                    <FiChevronLeft />
                  </button>

                  {getVisiblePages().map((page, index) =>
                    page === '...' ? (
                      <span key={`dots-${index}`} className="px-2 text-white/40">
                        ...
                      </span>
                    ) : (
                      <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${
                          currentPage === page
                            ? 'bg-cyan-400 text-black'
                            : 'bg-transparent text-white/70 hover:text-white'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0f1217] text-white/70 transition-all disabled:opacity-40"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              )}

              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-16 overflow-hidden rounded-[28px] border border-cyan-500/10 bg-[linear-gradient(180deg,#0b0e13_0%,#11161d_100%)] relative"
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(0,255,180,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.14),transparent_28%)]" />
                </div>

                <div className="relative z-10 px-6 py-12 md:px-10 md:py-14">
                  <div className="max-w-3xl">
                    <p className="text-xs md:text-sm uppercase tracking-[3px] text-cyan-300 font-semibold">
                      Tredixo Market Hub
                    </p>

                    <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-white">
                      Smarter Reads for
                      <span className="block text-lime-300">Smarter Trading Decisions</span>
                    </h2>

                    <p className="mt-5 text-sm md:text-base leading-8 text-white/65 max-w-2xl">
                      Explore premium market insights, trend-driven stories, and focused
                      articles designed to keep traders informed, sharp, and one step ahead.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      {
                        title: 'Daily Market Focus',
                        desc: 'Fresh market reads curated to highlight what matters most in the current session.',
                      },
                      {
                        title: 'Trading Insight',
                        desc: 'Action-oriented content that helps readers understand movement, momentum, and setup logic.',
                      },
                      {
                        title: 'Premium Analysis',
                        desc: 'High-clarity articles built for traders who prefer clean, deep, and practical content.',
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.12 }}
                        viewport={{ once: true }}
                        className="rounded-[22px] border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-cyan-400/20 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="mb-4 h-11 w-11 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-300 font-bold">
                          0{index + 1}
                        </div>

                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/60">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                      to="/blogs"
                      className="inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                    >
                      Explore More Insights
                    </Link>

                    <Link
                      to="/why-tredixo"
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      Why Tredixo
                    </Link>
                  </div>
                </div>
              </motion.section>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;