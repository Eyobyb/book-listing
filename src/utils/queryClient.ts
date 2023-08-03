import { QueryClient } from 'react-query';
import axios from 'axios';

const pathSeparator = '/';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => {
        const [url, params] = queryKey;
        let param = params as { page: number };
        const fullUrl: string = params ? `${url}${pathSeparator}?page=${param.page}` : (url as string);
        return axios.get(fullUrl).then(({ data }) => data);
      },
    },
  },
});

export default queryClient;
