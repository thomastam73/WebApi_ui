import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { drawRect } from "./utilities";

const ClientDashboard = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isOnline, setIsOnline] = useState(null);

  const runCoco = async () => {
    const net = await tf.loadGraphModel(
      "https://signlanguage-tensorflow.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
    );

    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const stopCoco = async () => {
    const net = await tf.loadGraphModel(
      "https://signlanguage-tensorflow.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
    );

    clearInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);

      const boxes = await obj[1].array();
      const classes = await obj[2].array();
      const scores = await obj[4].array();

      const ctx = canvasRef.current.getContext("2d");

      requestAnimationFrame(() => {
        drawRect(
          boxes[0],
          classes[0],
          scores[0],
          0.8,
          videoWidth,
          videoHeight,
          ctx
        );
      });

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };

  useEffect(() => {
    runCoco();

    // 指定如何在這個 effect 之後執行清除：
    return function cleanup() {
      stopCoco();
    };
  }, []);

  return (
    <div>
      <Webcam
        ref={webcamRef}
        muted={true}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 8,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
};

export default ClientDashboard;
