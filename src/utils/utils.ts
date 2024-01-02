import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hours < 12 ? 'am' : 'pm';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // Converts 24-hour time to 12-hour
  return `${formattedHours}:${mins.toString().padStart(2, '0')} ${period}`;
}

export function createTimeSlots(openTimes: [number, number], increment: number = 30): string[] {
  const [startTime, endTime] = openTimes;
  let startMinutes = Math.floor(startTime / 100) * 60 + startTime % 100;
  const endMinutes = Math.floor(endTime / 100) * 60 + endTime % 100;

  // Adjust the start time to the nearest half-hour mark
  if (startMinutes % increment !== 0) {
      startMinutes = startMinutes + (increment - startMinutes % increment);
  }

  const slots: string[] = [];
  for (let time = startMinutes; time < endMinutes; time += increment) {
      slots.push(formatTime(time));
  }

  return slots;
}
