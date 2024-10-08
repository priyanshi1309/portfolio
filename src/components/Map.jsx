import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-70, 0, 0],
        center: [-18, 20],
        scale: 700
      }}
      className="w-full h-full"
    >
      <Geographies
        geography="/features.json"
        fill="#111312"
        stroke="#748d92"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[77.5946, 12.9716]}
        dx={-70}
        dy={-30}
        connectorProps={{
          stroke: "#124e66",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-5" textAnchor="end" alignmentBaseline="middle" fill="#d3d9d4" className="text-2xl">
          {"Bengaluru"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
