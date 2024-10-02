import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Breadcrumb({ currentPage }: { currentPage: string }) {
  return (
    <nav className="text-sm py-5 bg-gray-300 w-full flex items-center justify-center space-x-3 uppercase">
      <Link to="/" className=" hover:underline text-gray-600">
        Home
      </Link>
      <ArrowRight size={16} />
      <p className="font-medium">{currentPage}</p>
    </nav>
  );
}
