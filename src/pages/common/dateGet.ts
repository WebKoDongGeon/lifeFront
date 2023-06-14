import dayjs from 'dayjs';

export const dataGet = () => {
    const currentYear = dayjs().year();
    const years = Array.from({length: 11}, (_, i) => currentYear - i);
    const months = Array.from({length: 12}, (_, i) => i + 1);


    const getDaysInMonth = (year: number, month: number): number[] => {
        const daysInMonth = dayjs(`${year}-${month}`).daysInMonth();
        return Array.from({ length: daysInMonth }, (_, i) => i + 1);
      };
    
    return { years, months, getDaysInMonth };
}

  