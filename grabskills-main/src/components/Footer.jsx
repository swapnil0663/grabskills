export default function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} NGO Foundation. All rights reserved.
    </footer>
  );
}