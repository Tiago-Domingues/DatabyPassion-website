"use client";

import { useEffect, useRef, useState } from "react";

export function FounderVideo({ compact = false }: { compact?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  async function startVideo() {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    try {
      await video.play();
    } catch {
      setStarted(false);
    }
  }

  return (
    <figure className={`founder-video${compact ? " founder-video--compact" : ""}`}>
      <div className="founder-video__frame">
        <video
          ref={videoRef}
          controls={started}
          playsInline
          preload="metadata"
          poster="/media/founder-story-placeholder.jpg"
          aria-describedby="founder-video-note"
          onPlay={() => setStarted(true)}
        >
          <source src="/media/founder-story-placeholder.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        {!started && (
          <button
            type="button"
            className="founder-video__play"
            onClick={startVideo}
            aria-label="Play temporary founder-film layout video"
          >
            <span aria-hidden="true">▶</span>
            Play film
          </button>
        )}
        <span className="founder-video__placeholder">Temporary layout placeholder</span>
      </div>
      <figcaption id="founder-video-note">
        <strong>{compact ? "A note from the founder" : "Why the collective exists"}</strong>
        <p>
          Temporary footage is shown only to test the portrait-film experience. The release
          asset will be an English founder film with captions and a transcript.
        </p>
      </figcaption>
    </figure>
  );
}
