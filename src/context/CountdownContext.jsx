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

  const [focusTimeModel, setFocusTimeModel] = useState(25);
  const [restTimeModel, setRestTimeModel] = useState(5);

  const [focusTime, setFocusTime] = useState(focusTimeModel * 60);
  const [restTime, setRestTime] = useState(restTimeModel * 60);
  const [isActive, setIsActive] = useState(false);
  const [isRestActive, setIsRestActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const focusMinutes = Math.floor(focusTime / 60);
  const focusSeconds = focusTime % 60;

  const restMinutes = Math.floor(restTime / 60);
  const restSeconds = restTime % 60;

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  function startCountdown() {
    setIsActive(true);
  }

  function resetBooleans() {
    setIsActive(false);
    setIsRestActive(false);

    setHasFinished(false);
  }

  function resetCountdown() {
    clearTimeout(timeOut);
    clearTimeout(restTimeOut);

    resetBooleans();

    setFocusTime(focusTimeModel * 60);
    setRestTime(restTimeModel * 60);
  }

  function updateTime(newFocusTime, newRestTime) {
    setFocusTimeModel(newFocusTime);
    setRestTimeModel(newRestTime);

    resetBooleans();

    setFocusTime(newFocusTime * 60);
    setRestTime(newRestTime * 60);

    clearTimeout(timeOut);
    clearTimeout(restTimeOut);
  }

  function finishCycle(title, message) {
    new Audio('./notification.mp3').play();

    if (Notification.permission === 'granted') {
      const notification = new Notification(title, {
        icon: './favicon.svg',
        body: message,
      });

      notification.onclick = (e) => {
        e.preventDefault();
        window.focus();
        notification.close();
      };
    }
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
      setHasFinished(true);

      finishCycle(
        'You concluded a new cycle! 🎉',
        `Now take a break for ${restTimeModel} ${Number(restTimeModel) === 1 ? 'minute' : 'minutes'}.`,
      );
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
      setHasFinished(false);

      finishCycle(
        'Your rest time finished, time to work 📚',
        `Let's work, now a new cycle started for ${focusTimeModel} ${Number(focusTimeModel) === 1 ? 'minute' : 'minutes'}.`,
      );
      resetCountdown();
      startCountdown();
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
      hasFinished,
    }
  ), [isActive, isRestActive, focusTime, restTime]);

  return (
    <CountdownContext.Provider value={contextValue}>
      {children}
    </CountdownContext.Provider>
  );
}
