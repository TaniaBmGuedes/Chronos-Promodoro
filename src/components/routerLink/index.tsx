import { Link } from 'react-router';

type RouteLinkProps = {
  children: React.ReactNode;
  hRef: string;
} & React.ComponentProps<'a'>;
export function RouterLink({ children, hRef, ...props }: RouteLinkProps) {
  return (
    <Link to={hRef} {...props}>
      {children}
    </Link>
  );
}
