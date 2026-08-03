"use client";

import { FC, useEffect, useRef, useState } from "react";
import "./StartupAd.css";

const VIDEO_PATH = "/ads/startup-ad.mp4";
const IMAGE_PATH = "/ads/banner.jpg";

const StartupAd: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [visible, setVisible] = useState(true);
  const [countdown, setCountdown] = useState(15);
  const [mediaType, setMediaType] = useState<"video" | "image" | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Detect whether video or image exists
  useEffect(() => {
    let mounted = true;

    const detectMedia = async () => {
      try {
        const video = await fetch(VIDEO_PATH, {
          method: "HEAD",
          cache: "no-store",
        });

        if (video.ok) {
          if (mounted) setMediaType("video");
          return;
        }
      } catch {}

      try {
        const image = await fetch(IMAGE_PATH, {
          method: "HEAD",
          cache: "no-store",
        });

        if (image.ok) {
          if (mounted) setMediaType("image");
          return;
        }
      } catch {}

      if (mounted) {
        setVisible(false);
      }
    };

    detectMedia();

    return () => {
      mounted = false;
    };
  }, []);

  // 15 second timer
  useEffect(() => {
    if (!visible) return;

    const timer = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setVisible(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [visible]);

  // Enable sound after user click
  const enableSound = async () => {
    if (!videoRef.current) return;

    try {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      await videoRef.current.play();
      setSoundEnabled(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (!visible || !mediaType) return null;

  return (
    <div className="startup-ad-overlay">
      <div className="startup-ad-container">
        {mediaType === "video" ? (
          <video
            ref={videoRef}
            className="startup-ad-media"
            src={VIDEO_PATH}
            autoPlay
            muted
            playsInline
            controls={false}
            preload="auto"
            onEnded={() => setVisible(false)}
          />
        ) : (
          <img
            src={IMAGE_PATH}
            className="startup-ad-media"
            alt="Advertisement"
          />
        )}

        <div className="startup-ad-footer">
          <span>
            Advertisement {mediaType === "video" ? "🎥" : "🖼️"}
          </span>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            {mediaType === "video" && !soundEnabled && (
              <button
                className="startup-ad-skip"
                onClick={enableSound}
              >
                🔊 Enable Sound
              </button>
            )}

            <button
              className="startup-ad-skip"
              onClick={() => setVisible(false)}
            >
              Skip ({countdown})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupAd;