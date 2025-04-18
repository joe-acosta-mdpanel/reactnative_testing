// import { useEffect, useRef, useState } from "react";

// export const useGetData = () => {
//   const [data, setData] = useState<DisplayData[] | null>();
//   const [loading, setLoading] = useState(true);
//   const [reload, setReload] = useState(true);

//   useEffect(() => {
//     console.log("in effect");
//     if (reload) {
//       setLoading(true);
//       setData(null);
//       console.log("loading");
//       setTimeout(() => {
//         setData(sampleDisplayData);
//         setLoading(false);
//         setReload(false);
//       }, 1000);
//     }
//   }, [reload]);

//   return {
//     data,
//     loading,
//     forceReload: () => {
//       console.log("reload called");
//       setReload(true);
//     },
//   };
// };
