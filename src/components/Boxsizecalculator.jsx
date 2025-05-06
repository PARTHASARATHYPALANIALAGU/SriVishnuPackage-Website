import React, { useState } from "react";

const BoxSizeCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  const boxSizes = [
    { name: "Small", length: 15, width: 10, height: 5 },
    { name: "Medium", length: 25, width: 15, height: 10 },
    { name: "Large", length: 35, width: 25, height: 15 },
    { name: "XL", length: 50, width: 30, height: 20 },
  ];

  const recommendBox = () => {
    if (!length || !width || !height || !weight) return;

    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const weightValue = parseFloat(weight);

    const matchedBox =
      boxSizes.find(
        (box) => box.length >= l && box.width >= w && box.height >= h
      ) || { name: "Custom", length: l + 2, width: w + 2, height: h + 2 };

    let ply = "", gsm = "";
    if (weightValue <= 0.5) {
      ply = "3-ply";
      gsm = "120 GSM";
    } else if (weightValue <= 2) {
      ply = "5-ply";
      gsm = "120–140 GSM";
    } else if (weightValue <= 5) {
      ply = "5-ply";
      gsm = "140 GSM";
    } else {
      ply = "7-ply";
      gsm = "140+ GSM";
    }

    setRecommendation(
      `Recommended Box: ${matchedBox.name} (${matchedBox.length}x${matchedBox.width}x${matchedBox.height} cm)<br/>
      Recommended Ply: ${ply}<br/>
      Recommended GSM: ${gsm}`
    );
  };

  return (
    <section id="tool" className="py-12 px-4 bg-white transition-opacity duration-1000 ease-in opacity-100">
      <h2 className="text-3xl font-bold text-center mb-8">Box Size & Quality Recommender</h2>
      <div className="max-w-xl mx-auto space-y-4">
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Length (cm)"
          className="w-full p-3 rounded-lg border"
        />
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="Width (cm)"
          className="w-full p-3 rounded-lg border"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height (cm)"
          className="w-full p-3 rounded-lg border"
        />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight (kg)"
          step="0.01"
          className="w-full p-3 rounded-lg border"
        />
        <button
          onClick={recommendBox}
          className="bg-blue-900 text-white px-6 py-2 rounded-xl hover:bg-blue-700 w-full"
        >
          Recommend Box Size
        </button>
        {recommendation && (
          <p
            className="mt-4 text-center text-lg"
            dangerouslySetInnerHTML={{ __html: recommendation }}
          />
        )}
      </div>
    </section>
  );
};

export default BoxSizeCalculator;
