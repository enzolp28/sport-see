
import Link from "next/link";
import Cartuser from "@/composants/cartUser/cartUser";
import { USER_MAIN_DATA } from '@/lib/data';

export default function Home() {


  console.log(USER_MAIN_DATA[1].userInfos.age);

  return (
    <div className="home">
      <Link href="/profil/12">
        <Cartuser name={USER_MAIN_DATA[0].userInfos.firstName} age={USER_MAIN_DATA[0].userInfos.age} />
      </Link>
      <Link href="/profil/18">
        <Cartuser name={USER_MAIN_DATA[1].userInfos.firstName} age={USER_MAIN_DATA[1].userInfos.age} />
      </Link>
    </div>
  );
}
