import type { Trip } from '@travel-planner/shared';

import { apiClient } from '../client';

const TRIPS_PATH = '/trips';

export const getTrips = () => apiClient<Trip[]>(TRIPS_PATH);
