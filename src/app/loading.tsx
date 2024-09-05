export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-primary" />
    </div>
  );
}
