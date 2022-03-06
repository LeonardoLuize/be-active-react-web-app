/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-sequences */
import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';

export const CountdownContext = createContext({});

export default function CountdownProvider({ children }) {
  let timeOut;
  let restTimeOut;

  const [focusTimeModel, setFocusTimeModelModel] = useState(25);
  const [restTimeModelModel, setRestTimeModelModel] = useState(5);

  const [focusTime, setFocusTime] = useState(focusTimeModel * 60);
  const [restTime, setRestTime] = useState(restTimeModelModel * 60);
  const [isActive, setIsActive] = useState(false);
  const [isRestActive, setIsRestActive] = useState(false);

  const focusMinutes = Math.floor(focusTime / 60);
  const focusSeconds = focusTime % 60;

  const restMinutes = Math.floor(restTime / 60);
  const restSeconds = restTime % 60;

  function updateTime(focusTime, restTime) {
    setFocusTimeModelModel(focusTime);
    setRestTimeModelModel(restTime);
  }

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(timeOut);
    clearTimeout(restTimeOut);

    setIsActive(false);
    setIsRestActive(false);

    setFocusTime(focusTimeModel * 60);
    setRestTime(restTimeModelModel * 60);
  }

  // Focus time
  useEffect(() => {
    if (isActive && focusTime > 0) {
      timeOut = setTimeout(() => {
        setFocusTime(focusTime - 1);
      }, 1000);
    } else if (isActive && focusTime === 0) {
      setIsActive(false);
      setIsRestActive(true);
    }
  }, [isActive, focusTime]);

  // Rest time
  useEffect(() => {
    if (isRestActive && restTime > 0) {
      restTimeOut = setTimeout(() => {
        setRestTime(restTime - 1);
      }, 1000);
    } else if (isRestActive && restTime === 0) {
      setIsRestActive(false);
    }
  }, [isRestActive, restTime]);

  const contextValue = useMemo(() => (
    {
      focusMinutes,
      focusSeconds,
      restMinutes,
      restSeconds,
      updateTime,
      startCountdown,
      resetCountdown,
      isActive,
      isRestActive,
    }
  ), [focusSeconds, restSeconds, isActive, isRestActive]);

  return (
    <CountdownContext.Provider value={contextValue}>
      {children}
    </CountdownContext.Provider>
  );
}
