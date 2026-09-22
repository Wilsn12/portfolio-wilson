import { useEffect, useState } from "react";

function Preloader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      setTimeout(() => {
        onFinish();
      }, 700);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`preloader ${!loading ? "hide" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-name">
          <span>WILSON</span>
          <span>TANJAYA</span>
        </div>

        <div className="loader-line">
          <div className="loader-progress"></div>
        </div>

        <p>WELCOME TO MY PORTFOLIO</p>
      </div>
    </div>
  );
}

export default Preloader;