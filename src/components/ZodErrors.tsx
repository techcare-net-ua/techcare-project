export function ZodErrors({ error }: { error: string[] }) {
  if (!error) return null;
  return error.map((err: string, index: number) => (
    <div key={index} className="mt-4px py-4px text-sm text-errors-foreground">
      {err}
    </div>
  ));
}
