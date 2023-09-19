import React from 'react';
import {useState,useEffect,useRef} from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import logo from './logo.svg';
import './App.css';

import useModal from './hooks/useModal';
import { Calender } from './Calender';



function App() {
  return(
   <div>
    <Calender />
   

   </div>
  )
}

export default App;
