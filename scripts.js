function generateBernoulli() {
  const p = parseFloat(document.getElementById('probability').value);

  const nodes = new vis.DataSet([
    { id: 0, label: '0', x: 0, y: 1 - p },
    { id: 1, label: '1', x: 1, y: p }
  ]);

  const edges = new vis.DataSet([
    { from: 0, to: 1 }
  ]);

  const container = document.getElementById('visualization');
  const data = {
    nodes: nodes,
    edges: edges
  };

  const options = {
    width: '600px',
    height: '400px',
    nodes: {
      shape: 'dot',
      scaling: {
        min: 10,
        max: 30,
        label: {
          min: 8,
          max: 30,
          drawThreshold: 12,
          maxVisible: 20
        }
      }
    }
  };

  const network = new vis.Network(container, data, options);
}
