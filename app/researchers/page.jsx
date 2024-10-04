


"use client"
import { useEffect, useRef } from "react";


const Earth = () => {
    const arr=[
    {
        title:"Michael E. Mann",
        subtitle:"A climatologist known for his research on climate change and the hockey stick graph illustrating global temperature trends."
    }
    ,
    {
        title:"Katharine Hayhoe",
        subtitle:"An atmospheric scientist focused on climate change communication and the impacts of global warming."
    }
    ,
    {
        title:"James Hansen",
        subtitle:"A climatologist and former NASA scientist who has researched the effects of climate change, especially in relation to greenhouse gas emissions."
    }
    ,
    {
        title:"Rajendra K. Pachauri",
        subtitle:"The former chairman of the Intergovernmental Panel on Climate Change (IPCC) who has been involved in research related to climate change and greenhouse gas emissions."
    }
    ,
    {
        title:"Jennifer Francis",
        subtitle:"A researcher known for her work on Arctic climate change and its potential impacts on weather patterns and extreme events."
    }
    ,
    {
        title:"Gretchen Daily",
        subtitle:"An environmental scientist recognized for her research on ecosystem services, biodiversity, and climate change mitigation strategies."
    }
    ,
    {
        title:"Richard Alley",
        subtitle:"A geologist and climate scientist known for his work on ice cores and research into the effects of greenhouse gases on climate."
    }
    ,
    {
        title:"Susan Solomon",
        subtitle:"An atmospheric chemist who has researched the ozone hole, climate change, and the impacts of greenhouse gases."
    }
    ,
    {
        title:"Andrew Weaver",
        subtitle:"A climate scientist who has conducted research on climate modeling, the impacts of greenhouse gas emissions, and climate change mitigation strategies."
    }
    ,
    {
        title:"Naomi Oreskes",
        subtitle:" A historian of science who has studied the history of climate change science, including research on the role of greenhouse gases in global warming."
    }
    ,
    {
        title:"Chris Field",
        subtitle:"An ecologist who has contributed to research on climate change impacts, adaptation, and mitigation strategies, including the role of greenhouse gas emissions."
    }
    ,
    {
        title:"David Keith",
        subtitle:"An environmental scientist known for his research on climate engineering, including studies on greenhouse gas removal technologies."
    }
    ,
    {
        title:"Veerabhadran Ramanathan",
        subtitle:"A climate scientist who has conducted research on the role of short-lived climate pollutants, including greenhouse gases, in global warming."
    }

/*


*/
    ]


  return (
  <div>
    <div className="text-2xl m-[2rem] ">Researchers:</div>
    {arr?.map((item,index)=><div key={index}>
        <p className="mx-[2rem] text-xl my-[0.5rem]">{item.title}:{' '}</p>
        <p className="mx-[3rem] my-[0.5rem]">{item.subtitle}</p>
    </div>)}
  </div>
  );
};

export default Earth;