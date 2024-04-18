
export type NavbarHook = () => {
  isOpen: boolean;
  navbar: string;
  navbarItemList: string;
  handleToggle: () => void;
}