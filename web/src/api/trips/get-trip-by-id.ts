import type { Trip } from '@travel-planner/shared';

import { apiClient } from '../client';
import { paths } from '../paths';

export const getTripById = (id: string) => apiClient<Trip>(paths.tripById(id));
