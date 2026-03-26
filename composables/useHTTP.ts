import { emptyHttpWO } from '@/common/workOrderMocks';
import type { woHttpData } from '@/common/workOrderMocks';

export const useHTTP = async () => {
  const config = useRuntimeConfig();

  const serverURL: string = 'http://localhost:1880';
  // config.public.nodeEnv == 'production'
  //   ? `http://${config.public.serverName}:1880`
  //   : 'http://localhost:1880';

  async function fetchData() {
    // Private Declarations
    const endpoint: string = serverURL + '/work-order-data';

    // Refs
    let data: woHttpData = emptyHttpWO;

    try {
      // console.log('Getting Fetch Info');
      data = await fetch(endpoint).then((res) => res.json());
      console.log(data);
    } catch (error) {
      console.log('Error Fetching data ', error);
    }

    return { data };
  }

  async function fetchPost(message: { payload: string }) {
    // Private Declarations
    const endpoint: string = serverURL + '/command';

    // Refs
    let data = '';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      });
      data = await response.json();
    } catch (error) {
      console.log('Error Fetching data ', error);
    }

    return { data };
  }

  return { fetchData, fetchPost };
};
