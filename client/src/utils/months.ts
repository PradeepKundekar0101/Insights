const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  export const generateMonthLabels = ({ count = 12, startMonth = 1 } = {}) => {
    return Array.from({ length: count }, (_, index) => {
      const monthIndex = (startMonth + index - 1) % 12 + 1;
      return MONTH_NAMES[monthIndex - 1];
    });
  };
  