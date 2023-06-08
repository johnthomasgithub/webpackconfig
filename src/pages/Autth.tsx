// import { signIn, signOut, useSession } from 'next-auth/react';

// function Auth() {
//   const [session, loading]: any = useSession();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!session) {
//     return (
//       <div>
//         <button onClick={() => signIn()}>Sign in with Google</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <p>Welcome, {session.user.name}!</p>
//       <button onClick={() => signOut()}>Sign out</button>
//     </div>
//   );
// }

// export default Auth;
