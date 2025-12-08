import React, { useState } from "react";

const ZoomImage = ({ src }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove(e) {
    const rect = e.target.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  }

  return (
    <div
      className="relative md:w-[500px] h-[700px] overflow-hidden "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt=""
        className={`
          w-full h-full object-cover transition-transform duration-300 cursor-zoom-in
          ${isHovering ? "scale-160" : "scale-100"}
        `}
        style={{
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
    </div>
  );
};

export default ZoomImage;
