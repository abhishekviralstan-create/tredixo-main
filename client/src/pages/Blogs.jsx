import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import Spinner from '../assests/spinner/Spinner';
import newsHero from "../assests/news-hero.png"; // apni image ka path yahan set karo
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
        <title>Tredixo Blog | Market News, Trading Insights & Analysis</title>

        <meta
          name="description"
          content="Read the latest Tredixo blogs on market news, trading insights, NSE updates, MCX commodity trends, forex analysis, crypto news, and expert trading tips."
        />

        <meta
          name="keywords"
          content="Tredixo blog, trading blogs, market news, stock market analysis, NSE market news, Nifty market news, Bank Nifty updates, MCX commodity news, forex trading insights, crypto market updates, trading tips India, online trading articles, market insights blog"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="Tredixo" />
        <meta name="publisher" content="Tredixo" />

        <link rel="canonical" href="https://tredixo.info/blogs" />

        {/* Open Graph */}
        <meta property="og:title" content="Tredixo Blog | Latest Market News & Trading Insights" />
        <meta
          property="og:description"
          content="Explore Tredixo blogs for trading insights, market analysis, NSE updates, commodity trends, forex news, crypto updates, and trading education."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredixo.info/blogs" />
        <meta property="og:site_name" content="Tredixo" />
        <meta property="og:image" content="https://tredixo.info/images/tredixo-blog-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tredixo Blog | Market News & Trading Insights" />
        <meta
          name="twitter:description"
          content="Read premium trading insights, latest market news, NSE analysis, crypto updates, commodity trends, and forex articles from Tredixo."
        />
        <meta name="twitter:image" content="https://tredixo.info/images/tredixo-blog-og.jpg" />

        {/* Normal WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Tredixo Blog",
            headline: "Tredixo Blog | Market News, Trading Insights & Analysis",
            description:
              "Read the latest Tredixo blogs on market news, trading insights, NSE updates, MCX commodity trends, forex analysis, crypto news, and expert trading tips.",
            url: "https://tredixo.info/blogs",
            inLanguage: "en-IN",
            isPartOf: {
              "@type": "WebSite",
              name: "Tredixo",
              url: "https://tredixo.info",
            },
            publisher: {
              "@type": "Organization",
              name: "Tredixo",
              url: "https://tredixo.info",
              logo: {
                "@type": "ImageObject",
                url: "https://tredixo.info/images/tredixo-logo.png",
              },
            },
          })}
        </script>

        {/* Blog Schema without dynamic blogs.map */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Tredixo Trading Blog",
            url: "https://tredixo.info/blogs",
            description:
              "Tredixo blog provides trading insights, latest market news, NSE updates, MCX commodity trends, forex analysis, crypto updates, and educational trading articles.",
            inLanguage: "en-IN",
            publisher: {
              "@type": "Organization",
              name: "Tredixo",
              url: "https://tredixo.info",
              logo: {
                "@type": "ImageObject",
                url: "https://tredixo.info/images/tredixo-logo.png",
              },
            },
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://tredixo.info",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blogs",
                item: "https://tredixo.info/blogs",
              },
            ],
          })}
        </script>
      </Helmet>
      {/* BLOG HERO */}
      <section className="relative w-full overflow-hidden bg-[#050b10] pb-8 pt-0">
        {/* background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,255,31,0.17),transparent_32%),radial-gradient(circle_at_top_right,rgba(0,180,255,0.10),transparent_28%),linear-gradient(90deg,rgba(82,255,31,0.05),rgba(0,0,0,0)_45%)]" />

        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[#52ff1f]/10 blur-[120px]" />
        <div className="absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-12 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-[#52ff1f]/30 bg-[#52ff1f]/5 px-5 py-2 mb-7">
                <span className="text-[10px] md:text-xs font-semibold tracking-wide text-[#52ff1f]">
                  Tredixo Market Hub
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
                Latest Market
                <br />
                <span className="text-[#52ff1f]">News & Insights</span>
              </h1>

              <p className="text-gray-300 mt-6 max-w-2xl leading-8 text-base md:text-lg">
                Stay updated with trading insights, market trends, crypto updates,
                NSE news, commodity movements and expert-style articles from Tredixo.
              </p>

              <div className="flex flex-wrap gap-3 mt-9">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white">
                  Market News
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white">
                  Trading Blogs
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white">
                  Crypto Updates
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white">
                  NSE Insights
                </span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 m-auto h-[280px] w-[280px] md:h-[380px] md:w-[380px]" />

              <div className="relative">
                <div className="absolute -inset-6 " />

                <img
                  src={newsHero}
                  alt="Tredixo latest market news and trading insights"
                  className="relative z-10 w-full max-w-[360px] md:max-w-[460px] lg:max-w-[520px] drop-shadow-[0_35px_80px_rgba(82,255,31,0.18)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
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
                          Read Full Blog
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
                            Read Blogs <FiArrowRight />
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
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${currentPage === page
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