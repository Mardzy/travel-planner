import { useQuery } from '@tanstack/react-query';

import { getTrips } from '@/api';

export const useTrips = () =>
  useQuery({
    queryKey: ['trips'],
    queryFn: getTrips
  });
