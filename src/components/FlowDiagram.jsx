import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
} from "react-flow-renderer";
import CustomNode from "./CustomNode";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Start Node" },
    position: { x: 250, y: 5 },
  },
  {
    id: "2",
    data: {
      label: "Custom Node A",
      subDiagram: ["Step 1", "Step 2", "Step 3"],
    },
    position: { x: 100, y: 100 },
    type: "custom",
  },
  {
    id: "3",
    data: { label: "Custom Node B", subDiagram: ["Task A", "Task B"] },
    position: { x: 400, y: 100 },
    type: "custom",
  },
  {
    id: "4",
    type: "output",
    data: { label: "End Node" },
    position: { x: 250, y: 250 },
  },
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-4", source: "3", target: "4" },
];

// Move nodeTypes outside the component
const nodeTypes = {
  custom: CustomNode,
};

const FlowDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    initialElements.filter((el) => !el.source)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    initialElements.filter((el) => el.source)
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: 400, border: "1px solid #ccc", borderRadius: 5 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="#aaa" gap={16} />
        <Controls />
        <MiniMap
          nodeColor={(n) => (n.type === "custom" ? "blue" : "#FFCC00")}
        />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
