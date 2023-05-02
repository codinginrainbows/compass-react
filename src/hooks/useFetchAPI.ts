import { useEffect, useState } from "react";

type UseFetchState<T> = {
  state: "idle" | "loading" | "error" | "success";
  data: null | T;
  error: null | Error;
};

function useFetchAPI<T>(endpoint: string) {
  const [fetchState, setFetchState] = useState<UseFetchState<T>>({
    state: "idle",
    data: null,
    error: null
  });

  const localBaseURL = 'http://gabrielgarcia-compassuol-backend.vercel.app/api/v1'

  useEffect(
    function () {
      async function fetchData() {
        try {
          setFetchState((oldValue) => ({
            ...oldValue,
            state: "loading"
          }));
          const response = await fetch(`${localBaseURL}/${endpoint}`);
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
    [endpoint]
  );

  return fetchState;
}

export { useFetchAPI }