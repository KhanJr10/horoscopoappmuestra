import {IZodialSings, TZodialSings} from './interfaces';

const currentDate = new Date();

// /**
//  * Function to convert date string to Date object
//  * @param date string
//  * @returns Date
//  */
const convertDate = (date: string): Date => {
  const [day, month] = date.split('-').map(Number);
  return new Date(currentDate.getFullYear(), month - 1, day);
};

export const useNearestObject = (
  array: TZodialSings,
): {
  id: number;
  name: string;
  init_date: string;
  end_date: string;
  prediction: string;
  image: string;
} | null => {
  return array.reduce((former: IZodialSings | null, current: IZodialSings) => {
    const startDate = convertDate(current.init_date).getTime();
    const endDate = convertDate(current.end_date).getTime();

    const diffStart = Math.abs(currentDate.getTime() - startDate);
    const diffEnd = Math.abs(currentDate.getTime() - endDate);

    if (
      former === null ||
      (diffStart <
        Math.abs(
          currentDate.getTime() - convertDate(former.init_date).getTime(),
        ) &&
        diffStart <
          Math.abs(
            currentDate.getTime() - convertDate(former.end_date).getTime(),
          ))
    ) {
      return {...current};
    }
    if (
      diffEnd <
        Math.abs(
          currentDate.getTime() - convertDate(former.init_date).getTime(),
        ) &&
      diffEnd <
        Math.abs(currentDate.getTime() - convertDate(former.end_date).getTime())
    ) {
      return {...current};
    } else {
      return {...former};
    }
  }, null);
};

/**
 * Function to sort the arrangement alphabetically
 * @param array arrangement to order
 * @returns ordered arrangement
 */
export const sortByName = (array: TZodialSings): IZodialSings[] => {
  return array.slice().sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Function to sort the arrangement by the longest date
 * @param array arrangement to order
 * @returns ordered arrangement
 */
export const sortByMajorDate = (array: TZodialSings): IZodialSings[] => {
  return array.slice().sort((a, b) => {
    const fechaA = new Date(
      `${new Date().getFullYear()}-${a.init_date
        .split('-')
        .reverse()
        .join('-')}`,
    );
    const fechaB = new Date(
      `${new Date().getFullYear()}-${b.init_date
        .split('-')
        .reverse()
        .join('-')}`,
    );
    return fechaB.getTime() - fechaA.getTime(); // Cambiado el orden para mayor a menor
  });
};

/**
 * Function to sort the arrangement by the smallest date
 * @param array arrangement to order
 * @returns ordered arrangement
 */
export const sortByMinorDate = (array: TZodialSings): IZodialSings[] => {
  return array.slice().sort((a, b) => {
    const fechaA = new Date(
      `${new Date().getFullYear()}-${a.init_date
        .split('-')
        .reverse()
        .join('-')}`,
    );
    const fechaB = new Date(
      `${new Date().getFullYear()}-${b.init_date
        .split('-')
        .reverse()
        .join('-')}`,
    );
    return fechaA.getTime() - fechaB.getTime(); // Cambiado el orden para mayor a menor
  });
};
