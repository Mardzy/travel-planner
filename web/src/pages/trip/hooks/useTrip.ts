import { useQuery } from '@tanstack/react-query';

import { getTripById } from '@/api';

export const useTrip = (tripId: string) =>
  useQuery({
    queryKey: ['trips', tripId],
    queryFn: () => getTripById(tripId),
    enabled: Boolean(tripId)
  });
