import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const HuffmanTreeChart = ({ huffmanCodeTable }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const huffmanTreeData = buildHuffmanTreeData(huffmanCodeTable);
    const option = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove"
      },
      series: [
        {
          type: "tree",
          data: [huffmanTreeData],
          top: "1%",
          left: "7%",
          bottom: "1%",
          right: "20%",
          symbolSize: 7,
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 9
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left"
            }
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [huffmanCodeTable]);


  const buildHuffmanTreeData = (codeTable) => {
    const rootNode = {
      name: "Root",
      children: []
    };

    for (let character in codeTable) {
      let currentNode = rootNode;
      const code = codeTable[character];

      for (let bit of code) {
        if (bit === "0") {
          if (!currentNode.children[0]) {
            currentNode.children[0] = {
              name: "",
              children: []
            };
          }
          currentNode = currentNode.children[0];
        } else if (bit === "1") {
          if (!currentNode.children[1]) {
            currentNode.children[1] = {
              name: "",
              children: []
            };
          }
          currentNode = currentNode.children[1];
        }
      }

      currentNode.name = character;
    }

    return rootNode;
  };

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default HuffmanTreeChart;
