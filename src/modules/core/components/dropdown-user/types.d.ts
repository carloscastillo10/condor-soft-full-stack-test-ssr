export type DropDownUserProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"]
> & {
  userName?: string | null;
  isLoading: boolean;
};
