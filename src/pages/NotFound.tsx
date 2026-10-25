import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
    <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

    <div className="text-center">
      <p className="text-gradient font-display text-8xl font-bold">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft size={16} />
        Back to home
      </Link>
    </div>
  </div>
);

export default NotFound;
