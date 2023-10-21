import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface RouteParamResult {
  status: 'idle' | 'loading' | 'loaded' | 'error';
  value: string | undefined;
}

const useRouteParam = (): RouteParamResult => {
  const { roomId } = useParams<{ roomId: string | undefined }>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>('idle');
  const [value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchParamValue = async () => {
      try {
        setStatus('loading');
        // If there were any async operation, it would go here, e.g.,
        // await someAsyncOperation(id);
        setValue(roomId);
        setStatus('loaded');
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };

    if (roomId) {
      fetchParamValue();
    }
  }, [roomId]);

  return { status, value };
};

export default useRouteParam;
