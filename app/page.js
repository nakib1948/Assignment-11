import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <div className="card mx-auto mt-20 w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Welcome to My Blog!</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"> <Link href="/blog"> Go To Blog </Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
}
