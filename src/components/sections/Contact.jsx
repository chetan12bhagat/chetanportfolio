import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const EMAIL = "chetansb2004@gmail.com";

const Contact = () => {
    return (
        <section id="contact" className="max-w-6xl mx-auto my-24 px-4">
            <h2 className="text-3xl font-semibold mb-6">
                <span className="text-cyan-500">06.</span> Contact Us
            </h2>

            <p className="text-slate-500 max-w-2xl mb-10">
                Feel free to reach out for collaborations, opportunities,
                or just a quick hello.
            </p>

            {/* Email Block */}
            <div className="mb-8">
                <p className="text-sm text-slate-500 mb-2 font-mono uppercase tracking-wider">Email</p>
                <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-lg font-medium text-slate-900">
                        {EMAIL}
                    </span>

                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-1.5 rounded-full text-sm font-medium
                                 bg-slate-900 text-white
                                 hover:bg-slate-800 transition-all duration-300 shadow-sm"
                    >
                        Open in Gmail
                    </a>

                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(EMAIL);
                            alert("Email copied to clipboard");
                        }}
                        className="w-9 h-9 rounded-full border border-slate-300
                                 flex items-center justify-center text-slate-600
                                 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-900 
                                 transition-all duration-300"
                        title="Copy email"
                    >
                        <FiCopy size={16} />
                    </button>
                </div>
            </div>

            {/* Social Block */}
            <div>
                <p className="text-sm text-slate-500 mb-4 font-mono uppercase tracking-wider">Connect with me</p>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/chetan12bhagat"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full border border-slate-300
                                 flex items-center justify-center text-slate-600
                                 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-900 
                                 transition-all duration-300"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="https://linkedin.com/in/chetan12bhagat"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full border border-slate-300
                                 flex items-center justify-center text-slate-600
                                 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-900 
                                 transition-all duration-300"
                    >
                        <FaLinkedinIn size={18} />
                    </a>

                    <a
                        href="https://instagram.com/chetan12bhagat"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full border border-slate-300
                                 flex items-center justify-center text-slate-600
                                 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-900 
                                 transition-all duration-300"
                    >
                        <FaInstagram size={18} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
