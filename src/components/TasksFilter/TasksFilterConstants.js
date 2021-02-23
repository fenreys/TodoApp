const filterValues = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
};
const isAll = (status) => (filterValues.all === status ? 'selected ' : '');
const isActive = (status) =>
  filterValues.active === status ? 'selected ' : '';
const isCompleted = (status) =>
  filterValues.completed === status ? 'selected ' : '';

export { filterValues };
export { isAll };
export { isActive };
export { isCompleted };
