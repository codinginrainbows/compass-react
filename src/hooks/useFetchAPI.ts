import { useEffect, useState } from "react";
import { useToken } from "./useToken";

type UseFetchState<T> = {
  state: "idle" | "loading" | "error" | "success";
  data: null | T;
  error: null | Error;
};

function useFetchAPI<T>(endpoint: string, method: string, body?: T) {
  const [fetchState, setFetchState] = useState<UseFetchState<T>>({
    state: "idle",
    data: null,
    error: null
  });

  const { token } = useToken()

  // const localBaseURL = 'https://gabrielgarcia-compassuol-backend.vercel.app/api/v1'
  const localBaseURL = 'http://localhost:3001/api/v1'

  useEffect(
    function () {
      async function fetchData() {
        try {
          setFetchState((oldValue) => ({
            ...oldValue,
            state: "loading"
          }));
          
          const response = await fetch(`${localBaseURL}/${endpoint}`, {
            method: method,
            headers: {
              authorization: `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            const json = await response.json();
            setFetchState({
              data: json,
              state: "success",
              error: null
            });
          } else {
            setFetchState({
              data: null,
              state: "error",
              error: new Error(response.statusText)
            });
          }
        } catch (error) {
          setFetchState({
            data: null,
            state: "error",
            error: error as Error
          });
        }
      }
      fetchData();
    },
    [endpoint, method]
  );

  return fetchState;
}

export { useFetchAPI }