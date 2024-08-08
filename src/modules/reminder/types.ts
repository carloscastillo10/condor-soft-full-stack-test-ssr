export interface CalendarDate {
  date: Date;
  seconds: number;
  minutes: number;
  hours: number;
  dayNumber: number;
  day: string;
  dayNumberInWeek: number;
  dayShort: string;
  year: number;
  yearShort: string;
  month: string;
  monthShort: string;
  monthNumber: number;
  monthIndex: number;
  timestamp: number;
}

export interface Month {
  date: Date;
  getDay: (
    year: number,
    monthIndex: number,
    dayNumber: number,
    locale: string,
  ) => {
    date: Date;
    year: number;
    month: string;
    monthShort: string;
    monthIndex: number;
    day: string;
    dayShort: string;
    dayNumber: number;
    dayNumberInWeek: number;
  };
  monthName: string;
  monthIndex: number;
  monthNumber: number;
  year: number;
  createMonthDays: () => Array<{
    date: Date;
    year: number;
    month: string;
    monthShort: string;
    monthIndex: number;
    day: string;
    dayShort: string;
    dayNumber: number;
    dayNumberInWeek: number;
  }>;
}

export interface WeekDayName {
  day: string;
  dayNumberInWeek: number;
  dayShort: string;
}

export type CalendarDirection = "today" | "left" | "right" | "custom";
