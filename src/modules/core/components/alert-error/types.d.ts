export type AlertErrorProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"]
> & {
  errorMessage: string;
};
