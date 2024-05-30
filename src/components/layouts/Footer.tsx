import { YearLabel } from '@/components';

export const Footer = () => {
  return (
    <footer className="grid-in-footer border-t border-border">
      <div className="container px-2 py-2">
        <small className="block text-center text-muted-foreground">
          <span>Techcare</span>
          <YearLabel />
        </small>
      </div>
    </footer>
  );
};
