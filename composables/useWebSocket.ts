import { ref } from 'vue';

export const useWebSocket = () => {
  // Global Private Declarations
  const config = useRuntimeConfig();

  const serverURL: string =
    config.public.nodeEnv == 'production'
      ? `ws://${config.public.serverName}:1880`
      : 'ws://localhost:1880';

  const endpooint: string = serverURL + '/connection';
  let reconnectInterval: number = 1000; // Start with a 1s delay
  let socket: WebSocket;

  const socketData = ref<{ state: string; weight: number }>({
    state: 'IDLE',
    weight: 0.0
  });

  const establishConnection = () => {
    try {
      socket = new WebSocket(endpooint);
      // Event listener for successful connection
      socket.onopen = () => console.log('WebSocket connection established');
      // Listen for messages
      socket.addEventListener('message', (event) => {
        // Handle incoming messages
        socketData.value = JSON.parse(event.data);
        // console.log("Message from server ", data.value);
        console.log(
          'State: ',
          socketData.value.state,
          ' Weight: ',
          socketData.value.weight,
          'Server: ',
          config.public.serverName
        );
      });
    } catch (error) {
      // Log error if connection fails
      console.error('Failed to establish WebSocket connection:', error);
    }

    try {
      socket.onclose = () => {
        setTimeout(establishConnection, reconnectInterval);
        reconnectInterval *= 2; // Double the interval for the next attempt
      };
    } catch (error) {
      // Log error if connection fails
      console.error('Failed to close WebSocket connection:', error);
    }

    try {
      socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
        // Additional error handling logic can go here
      };
    } catch (error) {
      // Log error if connection fails
      console.error('Failed to catch error in WebSocket connection:', error);
    }

    try {
      // Reset reconnection interval upon successful connection
      socket.onopen = () => {
        reconnectInterval = 1000; // Reset to initial value
      };
    } catch (error) {
      // Log error if connection fails
      console.error('Failed to open WebSocket connection:', error);
    }
  };

  return {
    socketData,
    establishConnection
  };
};
