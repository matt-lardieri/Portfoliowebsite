export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Matthew Lardieri. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Mechanical & Aerospace Engineering Student
          </p>
        </div>
      </div>
    </footer>
  );
}
