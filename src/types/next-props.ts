export interface PropsChildren {
  children: React.ReactNode;
}

export interface PropsParams {
  params: { id: string };
}

export interface PropsError {
  error: Error & { digest?: string };
  reset: () => void;
}
