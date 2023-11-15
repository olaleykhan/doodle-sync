import { useEffect, useState } from "react";
import { getAllDoodles } from "@/services/firebase/doodleService";
import { DoodleDocument } from "@/bl/doodle/types";
import { Box, Typography } from "@mui/material";
import DoodleHistoryCard from "./components/DoodleHistoryCard";


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
    const doodles = useDoodles();

    if (!doodles) {
      return <p>Loading doodles...</p>;
    }
  


  return (
   <Box>
    {
      doodles.map((doodle) => (
        <DoodleHistoryCard key={doodle.id} doc={doodle} />
      ))
    }

   </Box>
  )
}

export default History