type PageProps = {
  route: string;
  title: string;
  description: string;
  image: string;
  image_alt: string;
  component: React.ComponentType<any> | null;
};
