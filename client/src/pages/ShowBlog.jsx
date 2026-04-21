import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BlogLoader from '../assests/blogSpinner/BlogLoader';
import {
  FiClock,
  FiCalendar,
  FiShare2,
  FiArrowRight,
} from 'react-icons/fi';

const ShowBlog = () => {
  const { blogSlug } = useParams();

  const [slug, setSlug] = useState(null);
  const [loader, setLoader] = useState(false);
  const [limitBlogs, setLimitBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchBlogSlug = async () => {
      try {
        setLoader(true);
        const fetchSlug = await axios.get(`/api/blog/get-all-blogs?slug=${blogSlug}`);
        const response = fetchSlug;

        if (response.status === 200) {
          const getSlug = response?.data?.blogs?.[0];
          setSlug(getSlug || null);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchBlogSlug();
  }, [blogSlug]);

  useEffect(() => {
    const getLimitBlogs = async () => {
      try {
        const getBlogs = await axios.get(`/api/blog/get-all-blogs?limit=6`);

        if (getBlogs.status === 200) {
          const blogs = getBlogs?.data?.blogs || [];
          setAllBlogs(blogs);
          setLimitBlogs(blogs);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getLimitBlogs();
  }, []);

  const readTime = useMemo(() => {
    if (!slug?.blogBody) return '5 Min Read';
    const plainText = slug.blogBody.replace(/<[^>]+>/g, ' ');
    const words = plainText.trim().split(/\s+/).filter(Boolean).length;
    const mins = Math.max(3, Math.ceil(words / 200));
    return `${mins} Min Read`;
  }, [slug]);

  const relatedBlogs = useMemo(() => {
    if (!slug?._id) return limitBlogs.slice(0, 3);
    return allBlogs.filter((item) => item._id !== slug._id).slice(0, 3);
  }, [allBlogs, slug, limitBlogs]);

  const trendingBlogs = useMemo(() => {
    if (!slug?._id) return limitBlogs.slice(0, 3);
    return allBlogs.filter((item) => item._id !== slug._id).slice(0, 3);
  }, [allBlogs, slug, limitBlogs]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Oct 24, 2024';
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return 'Oct 24, 2024';

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

  const getAuthorName = () => {
    return (
      slug?.userId?.username ||
      slug?.userId?.name ||
      slug?.user?.username ||
      slug?.user?.name ||
      slug?.authorName ||
      slug?.createdBy ||
      'Tredixo User'
    );
  };

  const handleCopyLink = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log('Copy failed:', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {loader ? (
        <BlogLoader />
      ) : (
        <>
          {slug && (
            <>
              <Helmet>
                <title>{slug.blogTitle} | Tredixo</title>
                <meta
                  name="description"
                  content={
                    slug.blogDesc ||
                    getPlainText(slug.blogBody).slice(0, 160) ||
                    'Read the latest insights and market updates on Tredixo.'
                  }
                />
              </Helmet>

              {/* Hero Section */}
              <section className="relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0">
                  <img
                    src={slug.blogImgFile}
                    alt={slug.blogTitle}
                    className="h-full w-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.08),transparent_45%)]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-10 md:pt-14 pb-20 md:pb-24">
                  <div className="min-h-[320px] md:min-h-[420px] flex items-end">
                    <div className="max-w-3xl rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 lg:p-10 shadow-[0_0_35px_rgba(0,0,0,0.35)]">
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[1.8px] text-white/60">
                        <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 font-semibold text-lime-300">
                          {slug.blogCategory || 'Market Strategy'}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <FiClock size={12} />
                          {readTime}
                        </span>
                      </div>

                      <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                        {slug.blogTitle}
                      </h1>

                      <p className="mt-5 max-w-2xl text-sm md:text-base leading-8 text-white/70">
                        {slug.blogDesc ||
                          getPlainText(slug.blogBody).slice(0, 220) + '...'}
                      </p>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <div className="h-12 w-12 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-sm font-semibold text-lime-300">
                          {getAuthorName().charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{getAuthorName()}</p>
                          <p className="text-[11px] uppercase tracking-[2px] text-white/45">
                            Author • {formatDate(slug.createdAt)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Main Content */}
              <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-10">
                  {/* Left Content */}
                  <div>
                    <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-white/55">
                      <div className="inline-flex items-center gap-2">
                        <FiCalendar className="text-cyan-300" />
                        <span>{formatDate(slug.createdAt)}</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <FiClock className="text-cyan-300" />
                        <span>{readTime}</span>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[1.8px] text-white/60">
                        {slug.blogCategory}
                      </span>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: slug.blogBody }}
                      className="blog-content prose prose-invert max-w-none
                        prose-headings:text-white
                        prose-headings:font-bold
                        prose-h1:text-3xl prose-h1:md:text-4xl
                        prose-h2:text-2xl prose-h2:md:text-3xl
                        prose-h3:text-xl prose-h3:md:text-2xl
                        prose-p:text-white/75 prose-p:leading-8 prose-p:text-[15px] md:prose-p:text-[16px]
                        prose-strong:text-white
                        prose-a:text-cyan-300
                        prose-blockquote:border-l-4 prose-blockquote:border-lime-400 prose-blockquote:pl-5 prose-blockquote:text-white/80
                        prose-li:text-white/75
                        prose-img:rounded-2xl
                        prose-hr:border-white/10"
                    />

                    {/* Share Section */}
                    <div className="mt-12 border-t border-white/10 pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-[2px] text-white/45 mb-3">
                          Share Article
                        </p>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={handleCopyLink}
                            className="h-11 px-4 rounded-full border border-white/10 bg-[#111317] flex items-center justify-center gap-2 text-white/70 hover:border-cyan-400/30 hover:text-cyan-300 transition-all"
                          >
                            <FiShare2 />
                            {copied ? 'Link Copied' : 'Copy Link'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <aside className="space-y-6">
                    <div className="rounded-[24px] border border-white/8 bg-[#111317] p-6">
                      <h3 className="text-2xl font-semibold mb-6">Trending Topics</h3>

                      <div className="space-y-5">
                        {trendingBlogs.map((item, index) => (
                          <Link
                            key={item._id || index}
                            to={`/blog/${item.slug}`}
                            className="block border-b border-white/6 pb-4 last:border-b-0 last:pb-0"
                          >
                            <p className="text-[10px] uppercase tracking-[2px] text-lime-300 mb-2">
                              {index === 0
                                ? 'Top Pick'
                                : index === 1
                                ? 'Technical'
                                : 'Beginner'}
                            </p>
                            <h4 className="text-sm leading-6 text-white/80 hover:text-white transition-colors">
                              {item.blogTitle}
                            </h4>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-[24px] border border-cyan-500/10 bg-[radial-gradient(circle_at_top_left,rgba(0,255,180,0.14),transparent_35%),linear-gradient(180deg,#071216_0%,#080a0d_100%)] p-6">
                      <div className="h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
                      <h3 className="mt-2 text-3xl font-bold leading-tight">
                        Ready to Trade?
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/60">
                        Join active traders using the Tredixo ecosystem for smarter market decisions.
                      </p>

                      <a
                        href="https://crm.tredixo.co.in/auth-pages/create-account/step1?accountType=real"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black hover:scale-[1.02] transition-all"
                      >
                        Open Account Now
                      </a>
                    </div>
                  </aside>
                </div>
              </section>

              {/* Related Articles */}
              <section className="border-t border-white/5 bg-[#050607] py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Related Articles</h2>

                    <Link
                      to="/blogs"
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[1.5px] text-cyan-300"
                    >
                      View All Article <FiArrowRight />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {relatedBlogs.map((value, index) => (
                      <Link
                        key={value._id || index}
                        to={`/blog/${value.slug}`}
                        className="overflow-hidden rounded-[22px] border border-white/8 bg-[#111317] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                      >
                        <div className="h-[220px] overflow-hidden">
                          <img
                            src={value.blogImgFile}
                            alt={value.blogTitle}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>

                        <div className="p-5">
                          <p className="text-[10px] uppercase tracking-[2px] text-white/30">
                            {value.blogCategory || 'Markets'}
                          </p>

                          <h3 className="mt-3 text-2xl font-semibold leading-tight">
                            {value.blogTitle}
                          </h3>

                          <p className="mt-4 line-clamp-2 text-sm leading-7 text-white/55">
                            {value.blogDesc ||
                              getPlainText(value.blogBody).slice(0, 110) + '...'}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ShowBlog;