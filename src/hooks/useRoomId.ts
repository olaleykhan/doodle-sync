import { useEffect, useState } from 'react';

export const useRoomId = () => {
  const [roomId, setRoomId] = useState<string|null>(null);

  useEffect(() => {
    // Assuming the room ID is the last part of the URL
    const urlParts = window.location.pathname.split('/');
    const id = urlParts[urlParts.length - 1];
    setRoomId(id);
  }, []);

  return roomId;
};
