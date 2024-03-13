import {QueryObserverResult, RefetchOptions} from '@tanstack/react-query';

export interface IHoroscopo {
  zodiac_signs: TZodialSings;
  videos: TVideos;
}

export interface IDataHoroscopo {
  zodiac_signs: TZodialSings;
}

export type TZodialSings = IZodialSings[];
export type TVideos = IVideo[];

export interface IItemSelected {
  itemSelected: IZodialSings | null;
}
export interface IZodialSings {
  id: number;
  name: string;
  init_date: string;
  end_date: string;
  prediction: string;
  image: string;
}

export interface IVideo {
  id: number;
  url: string;
}

export interface IHookGet {
  data: IHoroscopo | undefined;
  isLoading: boolean;
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<IHoroscopo, Error>>;
}

export interface IPositionScroll {
  horizontal: boolean;
}
