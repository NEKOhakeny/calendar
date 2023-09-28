import React, { ReactNode, useContext } from 'react';
import { FC, useState } from "react";
import { useEffect, } from 'react';
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Link, } from 'react-router-dom';
import { ScheduleContext,Schedule} from '../Providers/ScheduleProvider';
import { ProjectContext } from '../Providers/ProjectProvider';
import{} from '../Providers/ScheduleProvider';

export const AddSchedule:FC = ():ReactNode => {
    
    const {schedules,setSchedule} = useContext(ScheduleContext);
    const [count,setCount] = useState(0);
    const addNewSchedule = (task:Task) =>  {
        let mid = schedules;
        mid[task.stringDate].push(task);
        setSchedule(mid);
        setCount(count + 1);
    }
    useEffect(() => {
        
    },[count]);
    return (
        <div className= 'addSchedule'>
            <h1>新しいイヴェントを設定</h1>
            <input type = "text" name = 'Date'>{}</input>

        </div>
    )
}