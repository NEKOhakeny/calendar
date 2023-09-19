import React, { ReactNode, useContext } from 'react';
import { FC, useState } from "react";
import { useEffect, } from 'react';
import { ProjectContext } from '../Providers/ProjectProvider';
import { ScheduleContext } from '../Providers/ScheduleProvider';
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Link, } from 'react-router-dom';
import { byDate } from '../Data/byDate';

export const addSchedule:FC = () => {
    const {schedules,setSchedules} = useContext(ScheduleContext);
    useEffect(() =>{
        async function  getSchedule() {
            
        }
        getSchedule();
    },[]);




    return (
        <div className= 'addSchedule'>
            <h1>スケジュール</h1>

        </div>
    )
}