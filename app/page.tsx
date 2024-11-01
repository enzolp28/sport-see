
import Link from "next/link";

export default function Home() {

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`http://localhost:3000/user/18}`);
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  // console.log(data.userInfos);

  return (
    <div className="home">
      <h1>Home</h1>
      <p>
        <Link href="/profil/18">Profil 18</Link>
        <Link href="/profil/12">Profil 12</Link>
      </p>
    </div>
  );
}
