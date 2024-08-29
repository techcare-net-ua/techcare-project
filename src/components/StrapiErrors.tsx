export const StrapiErrors = ({ error }: { readonly error: string | null }) => {
  if (!error) return null;
  return (
    <div className="mt-4px py-4px text-xs text-errors-foreground">{error}</div>
  );
};
