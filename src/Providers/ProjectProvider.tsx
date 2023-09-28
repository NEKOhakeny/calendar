import React, {
	createContext,
	FC,
	ReactNode,
	useState,
	Dispatch,
	SetStateAction,
} from "react";

class Project{
    num?:number;
    title:string;
    start:Date;
    finish:Date;
    constructor(title:string,start:Date,finish:Date){
        this.title = title;
        this.start = start;
        this.finish = finish;
    }
}
type Props = {
    children: ReactNode;
}

export const ProjectContext = createContext(
    {} as {
        projects:Project[];
        setProject:React.Dispatch<SetStateAction<Project[]>>;
    }
);


export const ProjectProvider:FC<Props> = (props) => {
    const {children} = props;
    const [projects,setProject] = useState<Project[]>([]);

    return (
        <ProjectContext.Provider value = {{projects,setProject}}>
            {children}
        </ProjectContext.Provider>
    )


}

