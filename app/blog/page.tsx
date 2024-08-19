import React from 'react';

const Blog: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg leading-relaxed mb-4">
                        Welcome to my blog! Here you&apos;ll find my latest articles and thoughts on various topics. Feel free to explore and engage with the content.
                    </p>
                    <ul className="space-y-4">
                        <li className="border-b border-gray-300 pb-4">
                            <h2 className="text-2xl font-semibold">Article 1: Understanding AI</h2>
                            <p className="text-gray-700">Published on August 10, 2024</p>
                            <p>This article explains the basics of AI and its impact on various industries...</p>
                        </li>
                        <li className="border-b border-gray-300 pb-4">
                            <h2 className="text-2xl font-semibold">Article 2: Next.js for Beginners</h2>
                            <p className="text-gray-700">Published on July 25, 2024</p>
                            <p>A beginner&apos;s guide to understanding and building web applications using Next.js...</p>
                        </li>
                        {/* 追加のブログ記事をここに記述 */}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Blog;