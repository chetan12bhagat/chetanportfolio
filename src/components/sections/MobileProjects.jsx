import React from 'react';
import bella1 from '../../images/bella-1.png';
import bella2 from '../../images/bella-2.png';
import bella3 from '../../images/bella-3.png';
import bellaVideo from '../../video/bella-brew.mp4';

import kisan1 from '../../images/kisan-1.png';
import kisan2 from '../../images/kisan-2.png';
import kisan3 from '../../images/kisan-3.png';
import kisanVideo from '../../video/kisan-saathi.mp4';

import movie1 from '../../images/movie app 1.jpeg';
import movie2 from '../../images/movie app 2.jpeg';
import movie3 from '../../images/movie app 3.jpeg';
import movieVideo from '../../video/movie app.mp4';

// REUSABLE PREMIUM PHONE FRAME
const Phone = ({ src }) => (
    <div className="relative aspect-[9/18.5] w-full max-w-[200px] md:max-w-[220px] mx-auto
                  rounded-[2.5rem] border-[8px] border-slate-900 
                  bg-black shadow-lg overflow-hidden group">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />
        <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="App Screen" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-15" />
    </div>
);

const PhoneVideo = ({ src }) => (
    <div className="relative aspect-[9/18.5] max-w-[220px] mx-auto
                  rounded-[2.5rem] border-[8px] border-slate-900 
                  bg-black shadow-lg overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-30" />
        <video
            key={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="relative w-full h-full object-cover z-10"
        >
            <source src={src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20" />
    </div>
);

// REUSABLE TECH CHIP
const TechChip = ({ label }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full
                   text-xs font-medium bg-slate-100 text-slate-700
                   border border-slate-200">
        {label}
    </span>
);

const MobileProjects = () => {
    return (
        <section id="mobile-apps" className="max-w-7xl mx-auto my-32 px-6 md:px-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4 text-slate-900 mb-20">
                <span className="text-accent">04.</span> Mobile App Projects
            </h2>

            <div className="space-y-32">
                {/* 1. BELLA BREW CAFFE APP */}
                <div className="flex flex-col gap-10">
                    <div className="max-w-3xl">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Bella Brew Caffe App</h3>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6">
                            A modern cafe ordering & browsing mobile app built with React Native.
                            Features high-performance UI, smooth transitions, and premium design
                            that enhances the digital ordering experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <TechChip label="React Native" />
                            <TechChip label="Firebase" />
                            <TechChip label="REST API" />
                        </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <Phone src={bella1} />
                            <Phone src={bella2} />
                            <Phone src={bella3} />
                            <PhoneVideo src={bellaVideo} />
                        </div>
                    </div>
                </div>

                {/* 2. KISAN SAATHI APP */}
                <div className="flex flex-col gap-10">
                    <div className="max-w-3xl">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Kisan Saathi App</h3>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6">
                            An AI-powered sustainable farming mobile application helping farmers
                            with crop insights, weather updates, and smart recommendations to
                            optimize yields and monitor crop health in real-time.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <TechChip label="React Native" />
                            <TechChip label="Firebase" />
                            <TechChip label="Machine Learning" />
                            <TechChip label="Weather API" />
                        </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <Phone src={kisan1} />
                            <Phone src={kisan2} />
                            <Phone src={kisan3} />
                            <PhoneVideo src={kisanVideo} />
                        </div>
                    </div>
                </div>

                {/* 3. MOVIE BOOKING & TRAILER APP */}
                <div className="flex flex-col gap-10">
                    <div className="max-w-3xl">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Movie Booking & Trailer App</h3>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6">
                            A movie booking and trailer streaming mobile application that allows
                            users to browse movies, watch trailers, and book seats with a smooth,
                            cinematic user experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <TechChip label="React Native" />
                            <TechChip label="TMDB API" />
                            <TechChip label="Firebase" />
                            <TechChip label="Seat Booking Logic" />
                        </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <Phone src={movie1} />
                            <Phone src={movie2} />
                            <Phone src={movie3} />
                            <PhoneVideo src={movieVideo} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileProjects;
