import { useEffect, useRef } from "react";


export default function ProjectVideo({ video }) {
    const videoRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (videoRef.current) {
                        videoRef.current.play().catch(error => {
                            console.log("Video play failed:", error);
                        });
                    }
                } else {
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            },
            { threshold: 0.6 }
        );


        if (videoRef.current) observer.observe(videoRef.current);


        return () => observer.disconnect();
    }, []);


    return (
        <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className="rounded-2xl w-full shadow-lg max-h-[260px] object-cover"
        />
    );
}
