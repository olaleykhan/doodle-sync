import { useEffect, useState } from "react";
import { getAllDoodles } from "@/services/firebase/doodleService";
import { DoodleDocument } from "@/bl/doodle/types";
import { Box, Typography } from "@mui/material";
import DoodleHistoryCard from "./components/DoodleHistoryCard";
import Back from "./components/Back";
import Canvas from "@/components/canvas/Canvas";


export const useDoodles = (): DoodleDocument[] | undefined => {
  const [doodles, setDoodles] = useState<DoodleDocument[] | undefined>(undefined);

 useEffect(() => {
    const fetchDoodles = async () => {
      try {
        const doodlesData = await getAllDoodles();
        setDoodles(doodlesData);
      } catch (error) {
        console.error('Error fetching doodles:', error);
      }
    };

    fetchDoodles();
  }, []);

  return doodles;
};


const History = () => {  
  const [selected, setSelected] = useState<DoodleDocument | undefined>(undefined);
    const doodles = useDoodles();

    if (!doodles) {
      return <p>Loading doodles...</p>;
    }
  


  return (
   <Box>
    {

      selected ?
        <>
        <Canvas id="" serializedStore={selected?.serializedStore}/>
        <Back handleBack={() => setSelected(undefined)} />
        </>
      : 
      <Box mx={4}>
          {
            doodles.map((doodle) => (
              <DoodleHistoryCard key={doodle.id} doc={doodle} onClick={setSelected} />
            ))
          }
         </Box>
    }

   </Box>
  )
}

export default History