import Matter from "matter-js"
import React from 'react';
import { useState, useEffect } from "react";

interface userinfo {
  id: number;
  name: string;
  url: string;
  date: string;
}

export const Brock =  (url: string) => {
  const Bodies = Matter.Bodies;
  const brock = Bodies.rectangle(500, 100, 60, 120, {
    density: 0.0002,
    render: {
      strokeStyle: "#ffffff",
      sprite: { texture: url, xScale: 0.28, yScale: 0.28 }
    }
  });
  return brock;
}