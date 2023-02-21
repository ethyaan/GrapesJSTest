import { useState, useRef } from "react";
import { GrapesjsReact } from "grapesjs-react";
import pwp from "grapesjs-preset-webpage";
import gbb from "grapesjs-blocks-basic";
import "grapesjs/dist/css/grapes.min.css";
// import "./App.css";

const myNewComponentTypes = (editor: any) => {
  editor.DomComponents.addType("thought-spot", {
    isComponent: (el: HTMLElement) => {
      return { type: "thought-spot" };
    },
    model: {
      defaults: {
        tagName: "div",
        attributes: { title: "Hello" },
        components: `
        <div>This Is ThoughtSpot Example<div>
      `,
      },
    },
  });
};

const blocks = {
  blocks: [
    {
      id: "image",
      label: "ThoughtSpot",
      media: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_16_279)">
      <path d="M-0.0197811 -0.0280266C-0.0998559 0.0320296 -0.159912 0.932872 -0.159912 1.97385V3.83559H31.7699H63.7198L63.6598 1.87375L63.5997 -0.068064L31.85 -0.12812C14.3937 -0.148139 0.0402751 -0.108101 -0.0197811 -0.0280266Z" fill="white"/>
      <path d="M-0.159912 9.8412V11.8431H31.7699H63.6998V9.8412V7.83932H31.7699H-0.159912V9.8412Z" fill="white"/>
      <path d="M-0.159912 17.8487V19.8506H10.8504H21.8607V41.7711V63.7116L23.8225 63.6515L25.7643 63.5915L25.8244 41.711L25.8644 19.8506H27.7662H29.668L29.708 41.711L29.7681 63.5915L31.7299 63.6515L33.6717 63.7116V41.7711V19.8506H35.6736H37.6755L37.7155 41.711L37.7756 63.5915L39.7374 63.6515L41.6792 63.7116V41.7711V19.8506H52.6895H63.6998V17.8487V15.8468H31.7699H-0.159912V17.8487Z" fill="white"/>
      <path d="M54.5513 48.3772C52.8898 48.7376 51.4885 49.5383 50.4075 50.6794C46.704 54.6431 47.805 60.8489 52.6496 63.2311C54.0909 63.9518 54.2711 63.9918 56.0728 63.9918C58.7353 63.9718 59.9364 63.4914 61.718 61.7097C63.4797 59.928 63.9802 58.7269 64.0002 56.0844C64.0002 54.3628 63.9401 54.0626 63.3796 52.8815C62.6389 51.32 61.9583 50.4792 60.7571 49.6584C58.9354 48.3973 56.6133 47.9168 54.5513 48.3772Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_16_279">
      <rect width="64" height="64" fill="white"/>
      </clipPath>
      </defs>
      </svg>`,
      // Use `image` component
      content: { type: "thought-spot" },
      // We want to activate it once dropped in the canvas.
      activate: true,
      // select: true, // Default with `activate: true`
    },
  ],
};

function App() {
  const editor = useRef();

  const onEditorInit = (editor: any) => {
    try {
      console.log("editor", editor);
    } catch (error) {
      console.log("Error =>", error);
    }
  };

  return (
    <div className="App">
      <GrapesjsReact
        id="grapesjs-react"
        onInit={onEditorInit}
        plugins={[pwp, gbb, myNewComponentTypes]}
        blockManager={blocks}
      />
    </div>
  );
}

export default App;
