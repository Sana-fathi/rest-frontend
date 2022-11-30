import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <div className="author flex py-5">
      <Image
        src={"/assets/img1.jpeg"}
        className="rounded-full"
        width={60}
        height={60}
      />
      {/* <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>Usman Koya</Link>
        <span className="text-sm text-gray-500">Managing Director of abcdefg</span>
      </div> */}
    </div>
  );
}
