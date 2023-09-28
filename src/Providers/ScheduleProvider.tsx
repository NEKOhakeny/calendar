import React, {
	createContext,
	FC,
	ReactNode,
	useState,
	Dispatch,
	SetStateAction,
} from "react";

class Task {
    subject:string;
    date:Date;
    stringDate:string;
    project?:string;
    constructor(subj:string,date:Date,proj?:string){
        this.subject = subj;
        this.date = date;
        this.stringDate = date.toDateString();
        this.project = proj;

    }
};

export type Schedule = {[key: string]: Task[]};
type Props = {
    children:ReactNode;
}

type ScheduleContextType = {
    schedules: Schedule;
    setSchedule: React.Dispatch<React.SetStateAction<Schedule>>;
  };
  
  // createContextにScheduleContextType型の初期値を渡す
  export const ScheduleContext = createContext<ScheduleContextType>({
    schedules: {},
    setSchedule: () => {},
  });

export const ScheduleProvider:FC<Props> = (props) => {
    const {children} = props;
    const [schedules,setSchedule] = useState<Schedule>({});

    return (
        <ScheduleContext.Provider value = {{schedules,setSchedule}}> 
            {children}
        </ScheduleContext.Provider>
    )
}