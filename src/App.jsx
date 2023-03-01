import { Fragment } from "react";
import "./App.css";
import BuildingAForm from "./exercises/BuildingAForm";
import CapturingUserClicks from "./exercises/CapturingUserClicks";
import CustomComponent from "./exercises/CustomComponent";
import HelloWorld from "./exercises/HelloWorld";
import MappingThroughAListAndRendering from "./exercises/MappingThroughAListAndRendering";
import MappingThroughAListAndRenderingCustomComponent from "./exercises/MappingThroughAListAndRenderingCustomComponent";
import RenderingJSON from "./exercises/RenderingJSON";
import StateAndProps from "./exercises/StateAndProps";
import WorkingWithAnAPI from "./exercises/WorkingWithAnAPI";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Calculator from "./exercises/Calculator";
import Todo from "./exercises/todo";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <HelloWorld />
          </div>
        ),
      },
      {
        path: "/capture-user-clicks",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <CapturingUserClicks />
          </div>
        ),
      },
      {
        path: "/custom-component",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <CustomComponent />
          </div>
        ),
      },
      {
        path: "/building-form",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <BuildingAForm />
          </div>
        ),
      },
      {
        path: "/state-and-props",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <StateAndProps />
          </div>
        ),
      },
      {
        path: "/mapping-through-list-and-rendering",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <MappingThroughAListAndRendering />
          </div>
        ),
      },
      {
        path: "/mapping-through-list-and-rendering-component",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <MappingThroughAListAndRenderingCustomComponent />
          </div>
        ),
      },
      {
        path: "/rendering-json",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <RenderingJSON />
          </div>
        ),
      },
      {
        path: "/working-with-api",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <WorkingWithAnAPI />
          </div>
        ),
      },
      {
        path: "/calculator",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <Calculator />
          </div>
        ),
      },
      {
        path: "/todo",
        element: (
          <div className="h-[70vh] w-[99%] flex justify-center items-center">
            <Todo />
          </div>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
