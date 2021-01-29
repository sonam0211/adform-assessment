import moment from 'moment';

export const checkRange = (value, start, end) => {
  if (start && end) {
    return (
      moment(moment(start, 'YYYY-MM-DD')).isBefore(value, 'MM/DD/YYYY') &&
      moment(end, 'YYYY-MM-DD').isAfter(value, 'MM/DD/YYYY')
    );
  } else if (start) {
    return moment(moment(start, 'YYYY-MM-DD')).isBefore(value, 'MM/DD/YYYY');
  } else if (end) {
    return moment(end, 'YYYY-MM-DD').isAfter(value, 'MM/DD/YYYY');
  }
  return true;
};
