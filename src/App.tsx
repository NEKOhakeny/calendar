import React, { createContext } from 'react';
import {useState,useEffect,useRef} from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import logo from './logo.svg';
import './App.css';
import useModal from './hooks/useModal';
import { Calender } from './Calender';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink, useLocation, BrowserRouter } from 'react-router-dom';
import { ScheduleContext } from './Providers/ScheduleProvider';
import { ProjectContext } from './Providers/ProjectProvider';



function App() {

  return(
    <div>
      <Calender />
    </div>
    
  )
}

export default App;
