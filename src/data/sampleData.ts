import { Node, Link } from '../types';

export const sampleData = {
  nodes: [
    { id: "Node 1", group: 1 },
    { id: "Node 2", group: 1 },
    { id: "Node 3", group: 2 },
  ],
  links: [
    { source: "Node 1", target: "Node 2", value: 1 },
    { source: "Node 2", target: "Node 3", value: 1 },
  ]
};
