import { TASKS_TYPES } from './constants';

export const getDefaultTaskState = () => ({
  priority: TASKS_TYPES.urgent,
  type: TASKS_TYPES.important,
  name: '',
  id: new Date().getTime()
});
