import React, { ReactNode, useContext } from 'react';
import { FC, useState } from "react";
import { useEffect, } from 'react';
import { useParams} from "react-router-dom";
import { BrowserRouter, Route, Link, } from 'react-router-dom';
import { ScheduleContext,Schedule} from '../Providers/ScheduleProvider';
import { ProjectContext } from '../Providers/ProjectProvider';
import { Task } from '../Providers/Task';
export const AddSchedule:FC = () => {
    const {day:Date} = useParams();
    const {schedules,setSchedule} = useContext(ScheduleContext);
    const [count,setCount] = useState(0);
    const addNewSchedule = (task:Task) =>  {
        let mid = schedules;
        mid[task.stringDate].push(task);
        setSchedule(mid);
        setCount(count + 1);
    }
    useEffect(() => {
        console.log('呼び出された');
        
    },[count]);
    return (
        <div className= 'addSchedule'>
            <h1>新しいイヴェントを設定</h1>
            <input id = 'Date' type = "text" name = 'Date'>{}</input>
        </div>
    )
}