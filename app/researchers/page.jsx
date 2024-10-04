


"use client"
import { useEffect, useRef } from "react";


const Earth = () => {
    const arr=[
    {
        title:"Michael E. Mann",
        subtitle:"A climatologist known for his research on climate change and the hockey stick graph illustrating global temperature trends.",
        number:"(814) 863-4075",
        email:"mann@psu.edu",
        link:""
    }
    ,
    {
        title:"Katharine Hayhoe",
        subtitle:"An atmospheric scientist focused on climate change communication and the impacts of global warming.",
        number:"",
        email:"",
        link:"https://www.linkedin.com/in/katharine-hayhoe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
    ,
    {
        title:"James Hansen",
        subtitle:"A climatologist and former NASA scientist who has researched the effects of climate change, especially in relation to greenhouse gas emissions.",
        number:"",
        email:"",
        link:"https://www.linkedin.com/in/james-hansen-97643680?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
    ,
    {
        title:"Rajendra K. Pachauri",
        subtitle:"The former chairman of the Intergovernmental Panel on Climate Change (IPCC) who has been involved in research related to climate change and greenhouse gas emissions.",
        number:"",
        email:"",
        link:"https://www.linkedin.com/in/saroj-pachauri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
    ,
    {
        title:"Jennifer Francis",
        subtitle:"A researcher known for her work on Arctic climate change and its potential impacts on weather patterns and extreme events.",
        number:"",
        email:"",
        link:""
    }
    ,
    {
        title:"Gretchen Daily",
        subtitle:"An environmental scientist recognized for her research on ecosystem services, biodiversity, and climate change mitigation strategies.",
        number:"",
        email:"gdaily@stanford.edu",
        link:""
    }
    ,
    {
        title:"Richard Alley",
        subtitle:"A geologist and climate scientist known for his work on ice cores and research into the effects of greenhouse gases on climate.",
        number:"617-324-2029",
        email:"solos@mit.edu",
        link:""
    }
    ,
    {
        title:"Susan Solomon",
        subtitle:"An atmospheric chemist who has researched the ozone hole, climate change, and the impacts of greenhouse gases.",
        number:"",
        email:"",
        link:""
    }
    ,
    {
        title:"Andrew Weaver",
        subtitle:"A climate scientist who has conducted research on climate modeling, the impacts of greenhouse gas emissions, and climate change mitigation strategies.",
        number:"(217) 244-9290",
        email:"aweaver5@illinois.edu",
        link:""
    }
    ,
    {
        title:"Naomi Oreskes",
        subtitle:" A historian of science who has studied the history of climate change science, including research on the role of greenhouse gases in global warming.",
        number:"",
        email:"",
        link:""
    }
    ,
    {
        title:"Chris Field",
        subtitle:"An ecologist who has contributed to research on climate change impacts, adaptation, and mitigation strategies, including the role of greenhouse gas emissions.",
        number:"",
        email:"",
        link:"https://www.linkedin.com/in/chrisfieldaustralia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
    ,
    {
        title:"David Keith",
        subtitle:"An environmental scientist known for his research on climate engineering, including studies on greenhouse gas removal technologies.",
        number:"+61 2 9385 2111",
        email:"david.keith@unsw.edu.au",
        link:""
    }
    ,
    {
        title:"Veerabhadran Ramanathan",
        subtitle:"A climate scientist who has conducted research on the role of short-lived climate pollutants, including greenhouse gases, in global warming.",
        number:"(858) 534-8815",
        email:"vram@ucsd.edu",
        link:"https://ramanathan.ucsd.edu/"
    }

/*


*/
    ]


  return (
  <div>
    <div className="text-2xl m-[2rem] ">Researchers:</div>
    {arr?.map((item,index)=><div key={index}>
        <p className="mx-[2rem] text-xl my-[0.5rem]">{item.title}:{' '}</p>
        <p className="mx-[3rem] my-[0.5rem]">{'description: '+item.subtitle}</p>
        {item.number&&<p className="mx-[3rem] my-[0.5rem]">{'number: '+item.number}</p>}
        {item.email&&<p className="mx-[3rem] my-[0.5rem]">{'email: '+item.email}</p>}
        {item.link&&<a target="_blank" href={item.link} className="mx-[3rem] my-[0.5rem]">{'link: '+item.link}</a>}
    </div>)}
  </div>
  );
};

export default Earth;