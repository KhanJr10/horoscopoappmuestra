import {useQuery} from '@tanstack/react-query';
import {customAxiosInstance} from './axiosService';
import {IHookGet, IHoroscopo} from './interfaces';

export const useGetList = (): IHookGet => {
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['getList'],
    queryFn: (): Promise<IHoroscopo> =>
      customAxiosInstance
        .get('api.json')
        .then(response => response.data)
        .catch(error => console.log(error)),
  });
  return {data, isLoading, refetch};
};
