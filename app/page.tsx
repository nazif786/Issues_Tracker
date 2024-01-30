import Image from "next/image";
import Pagination from "./issues/_components/Pagination";

export default function Home() {
  return (
    <div>
      <p> hello issue tracker </p>
      <Pagination itemCount={100} pageSize={10} currentPage={3} />
    </div>
  );
}
