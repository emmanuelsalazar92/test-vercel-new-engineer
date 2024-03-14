"use client"
import { useRouter } from 'next/navigation';

const MoveToPage = () => {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to the new page
    router.push('/newpage');
  };

  return (
    <button onClick={handleClick}>Go to New User Page</button>
  );
};

export {MoveToPage} ;
