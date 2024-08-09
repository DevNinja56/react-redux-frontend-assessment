import React from "react";
import { Handle } from "react-flow-renderer";

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node enhanced-node">
      <div className="node-header">
        <strong>{data.label}</strong>
        <span className="node-icon">🔧</span>
      </div>
      {data.subDiagram && (
        <div className="sub-diagram">
          <h5>Sub-Diagram:</h5>
          {data.subDiagram.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
      <Handle type="source" position="right" id="source" />
      <Handle type="target" position="left" id="target" />
    </div>
  );
};

export default CustomNode;
