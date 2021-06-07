// // HOC/withAuth.jsx
// import { useEffect, useState } from "react";
// import useSWR from 'swr'

// const withAuth = (WrappedComponent) => {

//     const [verified, setVerified] = useState(false)

//     useEffect(async () => {
//         const {data, revalidate} = useSWR('/api/me', async function(args) {
//             const res = await fetch(args);
//             return res.json();
//         });
//         if (data.email) {
//             setVerified(true);
//         }
//     })

//     return (props) => {
//         if (verified) {
//         return <WrappedComponent {...props} />;
//         } else {
//         return null;
//         }
//   };
// };

// export default withAuth;