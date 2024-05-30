import React from 'react';
import './style.css'; // Adjust the path if needed

const ROSPoweredUGVs: React.FC = () => {
  return (
    <div className="agilex-flex-container2">
      <div className="agilex-powered-box1">
        <h1 className="agilex-powered-h1">ROS Powered UGVs</h1>
        <div className="agilex-powered-line"></div>

        <p className="agile-powered-p">
          AgileX offers a full line up of mobile ROS powered UGV/AGVs for
          industrial and research applications. These platforms come in a variety
          of sizes and drive options for; 4 wheel drive, omni-directional drive,
          Ackerman steering and tracked options with payloads of up to 150kgs. The
          AgileX development kits expand platform capabilities to include:
          autonomous driving, path planning, 3D point cloud mapping and obstacle
          avoidance.
        </p>
      </div>

      <div className="agilex-powered-box2">
        <figure>
          <iframe
            src="https://www.youtube.com/embed/g-oNjPtah8g"
            className="agilex-powered-video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </figure>
      </div>
    </div>
  );
};

export default ROSPoweredUGVs;
