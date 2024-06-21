import { YearLabel } from '@/components';

export const Footer = () => {
  return (
    <footer className="border-t border-border grid-in-footer">
      <div className="container px-2 py-2">
        <small className="block text-center text-muted-foreground">
          <span>Techcare</span>
          <YearLabel />
        </small>
      </div>
    </footer>
  );
};
