import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemactions } from "../store/itemSlice";
// import { fetchActions } from "../store/fetchStatusSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus)
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;


    const controller = new AbortController();
    const signal = controller.signal;


    //console.log("gfhfg");
    // dispatch(fetchActions.markfetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // dispatch(fetchActions.markfetchDone())
        // dispatch(fetchActions.markfetchingDone())
        dispatch(itemactions.addInitialItems(items[0]))
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus])

  return <>

  </>
}

export default FetchItem;