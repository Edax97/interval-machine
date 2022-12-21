/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { useAppDispatch, useAppSelector } from "./store/app/hooks";
import {
  getProgramListEffect,
  saveProgramListEffect,
} from "./store/program-list/program-list.effects";
import { setListListener } from "./store/program-list/program-list.listeners";

function App() {
  const dispatch = useAppDispatch();
  const setList = useAppSelector(setListListener);

  //getProgramList
  useEffect(() => {
    dispatch(getProgramListEffect());
  }, []);

  //saveProgramList
  useEffect(() => {
    dispatch(saveProgramListEffect());
  }, [setList]);

  return (
    <div className="App container">
      <Header />
      <div className="mt-3 mt-lg-4">
        <div className="m-auto app-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
